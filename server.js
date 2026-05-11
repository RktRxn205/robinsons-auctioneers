const crypto = require("node:crypto");
const path = require("node:path");
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = Number(process.env.PORT || 4173);
const loginAttempts = new Map();
const loginWindowMs = 15 * 60 * 1000;
const maxLoginAttempts = 5;

const pool = mysql.createPool({
  host: process.env.DB_HOST || process.env.MYSQLHOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || process.env.MYSQLPORT || 3306),
  user: process.env.DB_USER || process.env.MYSQLUSER || "root",
  password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD || "",
  database: process.env.DB_NAME || process.env.MYSQLDATABASE || "robinsons_auctioneers",
  waitForConnections: true,
  connectionLimit: 10,
});

app.use(express.json());
app.set("trust proxy", 1);

app.use((_request, response, next) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "DENY");
  response.setHeader("Referrer-Policy", "no-referrer");
  response.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data: https://commons.wikimedia.org https://upload.wikimedia.org; style-src 'self'; script-src 'self'; connect-src 'self'; base-uri 'self'; frame-ancestors 'none'"
  );
  next();
});

function legacyHashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function createPasswordHash(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left, "hex");
  const rightBuffer = Buffer.from(right, "hex");

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function verifyPassword(password, storedHash) {
  if (storedHash.startsWith("scrypt$")) {
    const [, salt, expectedHash] = storedHash.split("$");
    const actualHash = crypto.scryptSync(password, salt, 64).toString("hex");
    return safeEqual(actualHash, expectedHash);
  }

  return legacyHashPassword(password) === storedHash;
}

function getLoginKey(request, email) {
  return `${request.ip}:${email.trim().toLowerCase()}`;
}

function getLoginAttempt(request, email) {
  const key = getLoginKey(request, email);
  const now = Date.now();
  const current = loginAttempts.get(key);

  if (!current || current.expiresAt <= now) {
    const attempt = { count: 0, expiresAt: now + loginWindowMs };
    loginAttempts.set(key, attempt);
    return { key, attempt };
  }

  return { key, attempt: current };
}

function recordFailedLogin(request, email) {
  const { attempt } = getLoginAttempt(request, email);
  attempt.count += 1;
}

function clearLoginAttempt(request, email) {
  loginAttempts.delete(getLoginKey(request, email));
}

function isLoginLimited(request, email) {
  const { attempt } = getLoginAttempt(request, email);
  return attempt.count >= maxLoginAttempts;
}

function toCustomer(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    preferredBranch: row.preferred_branch,
    theme: row.theme,
  };
}

function parsePalette(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    return JSON.parse(value);
  }

  return ["111827", "9ca3af", "f9fafb"];
}

function toWonAuction(row) {
  return {
    customerId: row.customer_id,
    title: row.title,
    description: row.description,
    branch: row.branch,
    auctionDate: row.auction_date,
    finalBid: Number(row.final_bid),
    imageFile: row.image_file,
    palette: parsePalette(row.palette_json),
  };
}

function toOngoingAuction(row) {
  return {
    title: row.title,
    description: row.description,
    branch: row.branch,
    closeDate: row.close_date,
    currentBid: Number(row.current_bid),
    bids: Number(row.bid_count),
    imageFile: row.image_file,
    palette: parsePalette(row.palette_json),
  };
}

async function getOngoingAuctions() {
  const [rows] = await pool.query(`
    SELECT
      oa.title,
      oa.description,
      b.name AS branch,
      DATE_FORMAT(oa.close_date, '%Y-%m-%d') AS close_date,
      oa.current_bid,
      oa.bid_count,
      oa.image_file,
      oa.palette_json
    FROM ongoing_auctions oa
    JOIN branches b ON b.id = oa.branch_id
    WHERE oa.status = 'active'
    ORDER BY oa.close_date ASC
  `);

  return rows.map(toOngoingAuction);
}

app.get("/api/health", async (_request, response) => {
  await pool.query("SELECT 1");
  response.json({ ok: true });
});

app.get("/api/ongoing-auctions", async (_request, response, next) => {
  try {
    response.json({ ongoingAuctions: await getOngoingAuctions() });
  } catch (error) {
    next(error);
  }
});

app.post("/api/login", async (request, response, next) => {
  try {
    const { email, password } = request.body || {};

    if (!email || !password) {
      response.status(400).json({ message: "Email and password are required." });
      return;
    }

    if (isLoginLimited(request, email)) {
      response.status(429).json({ message: "Too many login attempts. Please try again later." });
      return;
    }

    const [customerRows] = await pool.execute(
      `
        SELECT c.id, c.name, c.email, c.password_hash, c.theme, b.name AS preferred_branch
        FROM customers c
        JOIN branches b ON b.id = c.preferred_branch_id
        WHERE c.email = ?
        LIMIT 1
      `,
      [email.trim().toLowerCase()]
    );

    const customerRow = customerRows[0];
    if (!customerRow || !verifyPassword(password, customerRow.password_hash)) {
      recordFailedLogin(request, email);
      response.status(401).json({ message: "Invalid email or password." });
      return;
    }

    clearLoginAttempt(request, email);

    if (!customerRow.password_hash.startsWith("scrypt$")) {
      await pool.execute("UPDATE customers SET password_hash = ? WHERE id = ?", [
        createPasswordHash(password),
        customerRow.id,
      ]);
    }

    const [auctionRows] = await pool.execute(
      `
        SELECT
          wa.customer_id,
          wa.title,
          wa.description,
          b.name AS branch,
          DATE_FORMAT(wa.auction_date, '%Y-%m-%d') AS auction_date,
          wa.final_bid,
          wa.image_file,
          wa.palette_json
        FROM won_auctions wa
        JOIN branches b ON b.id = wa.branch_id
        WHERE wa.customer_id = ?
        ORDER BY wa.auction_date DESC
      `,
      [customerRow.id]
    );

    response.json({
      customer: toCustomer(customerRow),
      wonAuctions: auctionRows.map(toWonAuction),
      ongoingAuctions: await getOngoingAuctions(),
    });
  } catch (error) {
    next(error);
  }
});

app.use(express.static(__dirname));

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ message: "Server error." });
});

app.listen(port, () => {
  console.log(`Robinsons Auctioneers running at http://127.0.0.1:${port}`);
});
