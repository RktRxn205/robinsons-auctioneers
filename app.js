let customers = [
  {
    id: "cst-1001",
    name: "Amelia Ward",
    email: "amelia.ward@example.com",
    password: "Auction2025!",
    preferredBranch: "West Midlands",
    theme: "heritage",
  },
  {
    id: "cst-1002",
    name: "Marcus Chen",
    email: "marcus.chen@example.com",
    password: "Auction2025!",
    preferredBranch: "Greater London",
    theme: "metropolitan",
  },
];

function commonsImage(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1200`;
}

let auctions = [
  {
    customerId: "cst-1001",
    title: "Victorian walnut writing bureau",
    description: "A restored late nineteenth-century bureau with brass fittings and fitted interior.",
    branch: "West Midlands",
    auctionDate: "2025-02-18",
    finalBid: 1280,
    imageFile: "Antique writing desk with marquetry (25330750004).jpg",
    palette: ["5b4636", "d8bd8a", "f4eee4"],
  },
  {
    customerId: "cst-1001",
    title: "Omega Seamaster wristwatch",
    description: "Stainless steel automatic watch with presentation case and service papers.",
    branch: "Greater London",
    auctionDate: "2025-03-04",
    finalBid: 2460,
    imageFile: "Omega-Seamaster-p1020460.jpg",
    palette: ["1f2937", "9ca3af", "e5e7eb"],
  },
  {
    customerId: "cst-1001",
    title: "Contemporary studio glass vase",
    description: "Signed blue and amber blown glass piece from a regional studio collection.",
    branch: "West Midlands",
    auctionDate: "2025-04-12",
    finalBid: 420,
    imageFile: "Art Deco Glass Vase (5795698484).jpg",
    palette: ["0f766e", "f59e0b", "f7efe2"],
  },
  {
    customerId: "cst-1001",
    title: "Georgian silver tea service",
    description: "Four-piece hallmarked silver service with teapot, coffee pot, sugar bowl and milk jug.",
    branch: "Greater London",
    auctionDate: "2025-05-09",
    finalBid: 3120,
    imageFile: "State Gifts Silver Tea Service.JPG",
    palette: ["374151", "d1d5db", "f9fafb"],
  },
  {
    customerId: "cst-1001",
    title: "Edwardian emerald pendant",
    description: "Gold pendant with central emerald, seed pearl surround and original fitted case.",
    branch: "West Midlands",
    auctionDate: "2025-05-31",
    finalBid: 1740,
    imageFile: "Spanish jewellery-Gold and emerald pendant at VAM-01.jpg",
    palette: ["064e3b", "a7f3d0", "ecfdf5"],
  },
  {
    customerId: "cst-1001",
    title: "Signed coastal oil painting",
    description: "Framed twentieth-century harbour scene with gallery label and provenance notes.",
    branch: "Greater London",
    auctionDate: "2025-06-14",
    finalBid: 890,
    imageFile: "Canaletto - The Grand Canal near the Rialto Bridge, Venice - Google Art Project.jpg",
    palette: ["1e3a8a", "93c5fd", "eff6ff"],
  },
  {
    customerId: "cst-1001",
    title: "Hand-knotted Persian rug",
    description: "Large wool rug with central medallion design, deep red field and blue border.",
    branch: "West Midlands",
    auctionDate: "2025-07-03",
    finalBid: 1360,
    imageFile: "Persian rug 1.jpg",
    palette: ["7f1d1d", "1d4ed8", "fef3c7"],
  },
  {
    customerId: "cst-1001",
    title: "Pair of bronze garden urns",
    description: "Weathered cast bronze urns with classical handles and raised pedestal bases.",
    branch: "Greater London",
    auctionDate: "2025-07-26",
    finalBid: 980,
    imageFile: "Vase MET 160356.jpg",
    palette: ["3f3f46", "a16207", "f5f5f4"],
  },
  {
    customerId: "cst-1002",
    title: "First edition travel folio",
    description: "Illustrated hardback folio with maps, plates and original dust jacket.",
    branch: "Greater London",
    auctionDate: "2025-01-29",
    finalBid: 760,
    imageFile: "The Small Travel Book.png",
    palette: ["7f1d1d", "d6b36a", "f8f1df"],
  },
  {
    customerId: "cst-1002",
    title: "Art deco diamond brooch",
    description: "Platinum-set brooch with geometric mount and independent valuation certificate.",
    branch: "Greater London",
    auctionDate: "2025-03-22",
    finalBid: 3850,
    imageFile: "Gold and diamond bracelet.jpg",
    palette: ["111827", "d1d5db", "ffffff"],
  },
  {
    customerId: "cst-1002",
    title: "Mid-century teak sideboard",
    description: "Danish-inspired four-door cabinet with shaped handles and tapered supports.",
    branch: "West Midlands",
    auctionDate: "2025-04-27",
    finalBid: 940,
    imageFile: "G Plan Teak Sideboard.jpg",
    palette: ["78350f", "c0843c", "f6e7c7"],
  },
  {
    customerId: "cst-1002",
    title: "Leica M6 camera body",
    description: "Classic 35mm rangefinder camera with light meter, body cap and leather strap.",
    branch: "West Midlands",
    auctionDate: "2025-05-17",
    finalBid: 2210,
    imageFile: "Leica M6.jpg",
    palette: ["111827", "dc2626", "f3f4f6"],
  },
  {
    customerId: "cst-1002",
    title: "Moorcroft pottery lamp",
    description: "Tube-lined floral table lamp with cream shade and maker mark to the base.",
    branch: "Greater London",
    auctionDate: "2025-06-06",
    finalBid: 520,
    imageFile: "Han Pottery Lamp (10352697545).jpg",
    palette: ["164e63", "f97316", "fff7ed"],
  },
  {
    customerId: "cst-1002",
    title: "Sapphire cluster ring",
    description: "White gold ring with central sapphire, diamond halo and recent valuation paperwork.",
    branch: "Greater London",
    auctionDate: "2025-06-25",
    finalBid: 1880,
    imageFile: "Gold and diamond bracelet.jpg",
    palette: ["1e1b4b", "818cf8", "eef2ff"],
  },
  {
    customerId: "cst-1002",
    title: "Set of Chippendale chairs",
    description: "Six carved mahogany dining chairs with drop-in upholstered seats.",
    branch: "West Midlands",
    auctionDate: "2025-07-11",
    finalBid: 1470,
    imageFile: "Chair, after a design by Thomas Chippendale, V&A London 02.jpg",
    palette: ["451a03", "92400e", "fffbeb"],
  },
  {
    customerId: "cst-1002",
    title: "Modernist bronze sculpture",
    description: "Abstract tabletop bronze with marble plinth, signed and numbered by the artist.",
    branch: "Greater London",
    auctionDate: "2025-08-02",
    finalBid: 2650,
    imageFile: "Vízivirág (Palotás József, 2001), 2017 Dunaújváros.jpg",
    palette: ["292524", "ca8a04", "fafaf9"],
  },
];

let ongoingAuctions = [
  {
    title: "Rolex Datejust 36 wristwatch",
    description: "Steel and white gold automatic watch with Jubilee bracelet and box.",
    branch: "Greater London",
    closeDate: "2026-05-15",
    currentBid: 5200,
    bids: 18,
    imageFile: "Rolex Datejust 16013.jpg",
    palette: ["0f172a", "cbd5e1", "f8fafc"],
  },
  {
    title: "1960s Gibson acoustic guitar",
    description: "Vintage six-string guitar with sunburst finish, hard case and repair history.",
    branch: "West Midlands",
    closeDate: "2026-05-16",
    currentBid: 2850,
    bids: 11,
    imageFile: "1918 The Gibson acoustic guitar.png",
    palette: ["451a03", "f59e0b", "fff7ed"],
  },
  {
    title: "Chinese blue and white vase",
    description: "Tall ceramic vase with floral panels, underglaze mark and display stand.",
    branch: "Greater London",
    closeDate: "2026-05-17",
    currentBid: 1320,
    bids: 9,
    imageFile: "Chinese - Blue and White Vase - Walters 491082 - Side B.jpg",
    palette: ["1d4ed8", "93c5fd", "eff6ff"],
  },
  {
    title: "Diamond tennis bracelet",
    description: "Eighteen-carat white gold bracelet with graduated round brilliant diamonds.",
    branch: "West Midlands",
    closeDate: "2026-05-18",
    currentBid: 4100,
    bids: 22,
    imageFile: "Closeup tennis bracelet.jpg",
    palette: ["374151", "e5e7eb", "ffffff"],
  },
  {
    title: "Banksy exhibition screen print",
    description: "Limited edition print with certificate, framed behind museum-grade glass.",
    branch: "Greater London",
    closeDate: "2026-05-19",
    currentBid: 7600,
    bids: 31,
    imageFile: "Banksy Girl and Heart Balloon (2840632113).jpg",
    palette: ["111827", "ef4444", "f9fafb"],
  },
  {
    title: "Regency mahogany dining table",
    description: "Extending table with two leaves, reeded legs and brass castors.",
    branch: "West Midlands",
    closeDate: "2026-05-20",
    currentBid: 1680,
    bids: 7,
    imageFile: "Dining table MET DP-14204-299.jpg",
    palette: ["3f1d0b", "a16207", "fef3c7"],
  },
  {
    title: "Cartier leather jewellery case",
    description: "Red leather travel case with fitted interior and gilt maker stamp.",
    branch: "Greater London",
    closeDate: "2026-05-21",
    currentBid: 940,
    bids: 13,
    imageFile: "Jewel box.JPG",
    palette: ["7f1d1d", "fca5a5", "fff1f2"],
  },
  {
    title: "Pair of Murano glass lamps",
    description: "Ribbed amber glass table lamps with brass fittings and new wiring.",
    branch: "West Midlands",
    closeDate: "2026-05-22",
    currentBid: 620,
    bids: 6,
    imageFile: "Vase by Louis Comfort Tiffany, 1900-1905, blown Favrile glass - Portland Museum of Art - Portland, Maine - DSC04315.jpg",
    palette: ["92400e", "fbbf24", "fffbeb"],
  },
  {
    title: "Vintage Louis Vuitton trunk",
    description: "Monogram travel trunk with brass locks, leather trim and interior tray.",
    branch: "Greater London",
    closeDate: "2026-05-23",
    currentBid: 6400,
    bids: 26,
    imageFile: "LV Steamer Trunk.jpg",
    palette: ["422006", "b45309", "fef3c7"],
  },
  {
    title: "Rare single malt whisky lot",
    description: "Three sealed bottles from a private collection with original packaging.",
    branch: "West Midlands",
    closeDate: "2026-05-24",
    currentBid: 1950,
    bids: 15,
    imageFile: "Single Malt Scotch Whisky (53224427012).jpg",
    palette: ["431407", "f97316", "fff7ed"],
  },
];

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const state = {
  customer: null,
  search: "",
  branch: "all",
  sort: "recent",
  ongoingSearch: "",
  ongoingBranch: "all",
  ongoingSort: "closing",
  usingDatabase: false,
};

const authPanel = document.querySelector("#authPanel");
const dashboard = document.querySelector("#dashboard");
const ongoingPage = document.querySelector("#ongoingPage");
const auctionDetailPage = document.querySelector("#auctionDetailPage");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const customerName = document.querySelector("#customerName");
const auctionCount = document.querySelector("#auctionCount");
const totalValue = document.querySelector("#totalValue");
const preferredBranch = document.querySelector("#preferredBranch");
const searchInput = document.querySelector("#searchInput");
const branchFilter = document.querySelector("#branchFilter");
const sortOrder = document.querySelector("#sortOrder");
const auctionGrid = document.querySelector("#auctionGrid");
const emptyState = document.querySelector("#emptyState");
const ongoingGrid = document.querySelector("#ongoingGrid");
const ongoingCount = document.querySelector("#ongoingCount");
const viewOngoingPage = document.querySelector("#viewOngoingPage");
const backToDashboard = document.querySelector("#backToDashboard");
const fullOngoingGrid = document.querySelector("#fullOngoingGrid");
const fullOngoingCount = document.querySelector("#fullOngoingCount");
const fullOngoingTotal = document.querySelector("#fullOngoingTotal");
const nextClosing = document.querySelector("#nextClosing");
const ongoingBranches = document.querySelector("#ongoingBranches");
const ongoingSearchInput = document.querySelector("#ongoingSearchInput");
const ongoingBranchFilter = document.querySelector("#ongoingBranchFilter");
const ongoingSortOrder = document.querySelector("#ongoingSortOrder");
const ongoingEmptyState = document.querySelector("#ongoingEmptyState");
const backFromDetail = document.querySelector("#backFromDetail");
const detailTitle = document.querySelector("#detailTitle");
const detailMedia = document.querySelector("#detailMedia");
const detailAuctionTitle = document.querySelector("#detailAuctionTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailCurrentBid = document.querySelector("#detailCurrentBid");
const detailCloseDate = document.querySelector("#detailCloseDate");
const detailBranch = document.querySelector("#detailBranch");
const detailBids = document.querySelector("#detailBids");

function imageDataUri(item) {
  const [dark, mid, light] = item.palette;
  const safeTitle = item.title.replace(/[&<>"]/g, "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${safeTitle}">
      <rect width="800" height="500" fill="#${light}"/>
      <rect x="0" y="360" width="800" height="140" fill="#${dark}" opacity=".16"/>
      <circle cx="620" cy="145" r="86" fill="#${mid}" opacity=".9"/>
      <rect x="110" y="110" width="360" height="250" rx="18" fill="#${dark}" opacity=".88"/>
      <rect x="145" y="148" width="290" height="24" rx="12" fill="#${light}" opacity=".82"/>
      <rect x="145" y="204" width="205" height="24" rx="12" fill="#${light}" opacity=".62"/>
      <rect x="145" y="260" width="250" height="24" rx="12" fill="#${light}" opacity=".72"/>
      <path d="M520 285c42-62 110-62 152 0v60H520z" fill="#${mid}"/>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function imageSrc(item) {
  return item.imageFile ? commonsImage(item.imageFile) : imageDataUri(item);
}

function signIn(customer) {
  state.customer = customer;
  document.body.dataset.theme = customer.theme;
  window.localStorage.setItem("robinsonsCustomerId", customer.id);
  authPanel.classList.add("is-hidden");
  dashboard.classList.remove("is-hidden");
  ongoingPage.classList.add("is-hidden");
  auctionDetailPage.classList.add("is-hidden");
  loginError.textContent = "";
  populateBranches();
  populateOngoingBranches();
  render();
}

function signOut() {
  state.customer = null;
  delete document.body.dataset.theme;
  window.localStorage.removeItem("robinsonsCustomerId");
  dashboard.classList.add("is-hidden");
  ongoingPage.classList.add("is-hidden");
  auctionDetailPage.classList.add("is-hidden");
  authPanel.classList.remove("is-hidden");
  passwordInput.value = "";
}

async function authenticate(email, password) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 401) {
      return null;
    }

    if (response.ok) {
      const data = await response.json();
      auctions = data.wonAuctions;
      ongoingAuctions = data.ongoingAuctions;
      state.usingDatabase = true;
      return data.customer;
    }
  } catch (error) {
    state.usingDatabase = false;
  }

  return customers.find(
    (customer) =>
      customer.email.toLowerCase() === email.trim().toLowerCase() && customer.password === password
  );
}

function populateBranches() {
  const branches = [...new Set(auctions.map((auction) => auction.branch))].sort();
  branchFilter.innerHTML = '<option value="all">All branches</option>';
  branches.forEach((branch) => {
    const option = document.createElement("option");
    option.value = branch;
    option.textContent = branch;
    branchFilter.append(option);
  });
}

function populateOngoingBranches() {
  const branches = [...new Set(ongoingAuctions.map((auction) => auction.branch))].sort();
  ongoingBranchFilter.innerHTML = '<option value="all">All branches</option>';
  branches.forEach((branch) => {
    const option = document.createElement("option");
    option.value = branch;
    option.textContent = branch;
    ongoingBranchFilter.append(option);
  });
}

function getVisibleAuctions() {
  const term = state.search.trim().toLowerCase();
  const customerAuctions = auctions.filter((auction) => auction.customerId === state.customer.id);

  return customerAuctions
    .filter((auction) => state.branch === "all" || auction.branch === state.branch)
    .filter((auction) => {
      if (!term) return true;
      return [auction.title, auction.description, auction.branch].some((value) =>
        value.toLowerCase().includes(term)
      );
    })
    .sort((left, right) => {
      if (state.sort === "oldest") {
        return new Date(left.auctionDate) - new Date(right.auctionDate);
      }
      if (state.sort === "highest") {
        return right.finalBid - left.finalBid;
      }
      if (state.sort === "lowest") {
        return left.finalBid - right.finalBid;
      }
      return new Date(right.auctionDate) - new Date(left.auctionDate);
    });
}

function getVisibleOngoingAuctions() {
  const term = state.ongoingSearch.trim().toLowerCase();

  return ongoingAuctions
    .filter((auction) => state.ongoingBranch === "all" || auction.branch === state.ongoingBranch)
    .filter((auction) => {
      if (!term) return true;
      return [auction.title, auction.description, auction.branch].some((value) =>
        value.toLowerCase().includes(term)
      );
    })
    .sort((left, right) => {
      if (state.ongoingSort === "highest") {
        return right.currentBid - left.currentBid;
      }
      if (state.ongoingSort === "lowest") {
        return left.currentBid - right.currentBid;
      }
      if (state.ongoingSort === "bids") {
        return right.bids - left.bids;
      }
      return new Date(left.closeDate) - new Date(right.closeDate);
    });
}

function renderSummary(customerAuctions) {
  const total = customerAuctions.reduce((sum, auction) => sum + auction.finalBid, 0);
  customerName.textContent = state.customer.name;
  auctionCount.textContent = String(customerAuctions.length);
  totalValue.textContent = currency.format(total);
  preferredBranch.textContent = state.customer.preferredBranch;
}

function renderOngoingSummary() {
  const total = ongoingAuctions.reduce((sum, auction) => sum + auction.currentBid, 0);
  const branches = [...new Set(ongoingAuctions.map((auction) => auction.branch))].sort();
  const nextAuction = [...ongoingAuctions].sort(
    (left, right) => new Date(left.closeDate) - new Date(right.closeDate)
  )[0];

  fullOngoingCount.textContent = String(ongoingAuctions.length);
  fullOngoingTotal.textContent = currency.format(total);
  nextClosing.textContent = dateFormatter.format(new Date(nextAuction.closeDate));
  ongoingBranches.textContent = branches.join(", ");
}

function renderCard(auction) {
  const card = document.createElement("article");
  card.className = "auction-card";
  card.innerHTML = `
    <img alt="${auction.title}" src="${imageSrc(auction)}" onerror="this.onerror=null;this.src='${imageDataUri(auction)}'" />
    <div class="auction-content">
      <h2>${auction.title}</h2>
      <p>${auction.description}</p>
      <div class="metadata">
        <div>
          <span>Auction date</span>
          <strong>${dateFormatter.format(new Date(auction.auctionDate))}</strong>
        </div>
        <div>
          <span>Final bid</span>
          <strong class="bid-value">${currency.format(auction.finalBid)}</strong>
        </div>
        <div>
          <span>Branch</span>
          <strong>${auction.branch}</strong>
        </div>
        <div>
          <span>Status</span>
          <strong>Won</strong>
        </div>
      </div>
    </div>
  `;
  return card;
}

function renderOngoingCard(auction) {
  const auctionIndex = ongoingAuctions.indexOf(auction);
  const card = document.createElement("article");
  card.className = "auction-card";
  card.innerHTML = `
    <img alt="${auction.title}" src="${imageSrc(auction)}" onerror="this.onerror=null;this.src='${imageDataUri(auction)}'" />
    <div class="auction-content">
      <span class="live-badge">Live now</span>
      <h2>${auction.title}</h2>
      <p>${auction.description}</p>
      <div class="metadata">
        <div>
          <span>Closes</span>
          <strong>${dateFormatter.format(new Date(auction.closeDate))}</strong>
        </div>
        <div>
          <span>Current bid</span>
          <strong class="bid-value">${currency.format(auction.currentBid)}</strong>
        </div>
        <div>
          <span>Branch</span>
          <strong>${auction.branch}</strong>
        </div>
        <div>
          <span>Bids</span>
          <strong>${auction.bids}</strong>
        </div>
      </div>
      <button class="card-action" data-ongoing-index="${auctionIndex}" type="button">View auction</button>
    </div>
  `;
  return card;
}

function showOngoingPage() {
  dashboard.classList.add("is-hidden");
  ongoingPage.classList.remove("is-hidden");
  auctionDetailPage.classList.add("is-hidden");
  renderFullOngoingAuctions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDashboard() {
  ongoingPage.classList.add("is-hidden");
  auctionDetailPage.classList.add("is-hidden");
  dashboard.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showAuctionDetail(auctionIndex, returnView) {
  const auction = ongoingAuctions[auctionIndex];
  if (!auction) return;

  state.detailReturnView = returnView;
  detailTitle.textContent = auction.title;
  detailMedia.style.backgroundImage = `url("${imageSrc(auction)}"), url("${imageDataUri(auction)}")`;
  detailAuctionTitle.textContent = auction.title;
  detailDescription.textContent = auction.description;
  detailCurrentBid.textContent = currency.format(auction.currentBid);
  detailCloseDate.textContent = dateFormatter.format(new Date(auction.closeDate));
  detailBranch.textContent = auction.branch;
  detailBids.textContent = String(auction.bids);
  backFromDetail.textContent = returnView === "dashboard" ? "Back to history" : "Back to auctions";

  authPanel.classList.add("is-hidden");
  dashboard.classList.add("is-hidden");
  ongoingPage.classList.add("is-hidden");
  auctionDetailPage.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeAuctionDetail() {
  if (state.detailReturnView === "dashboard") {
    showDashboard();
    return;
  }

  showOngoingPage();
}

function renderFullOngoingAuctions() {
  const visibleOngoing = getVisibleOngoingAuctions();
  renderOngoingSummary();
  fullOngoingGrid.replaceChildren(...visibleOngoing.map(renderOngoingCard));
  ongoingEmptyState.classList.toggle("is-hidden", visibleOngoing.length > 0);
}

function render() {
  const customerAuctions = auctions.filter((auction) => auction.customerId === state.customer.id);
  const visibleAuctions = getVisibleAuctions();
  const previewOngoingAuctions = ongoingAuctions.slice(0, 3);
  renderSummary(customerAuctions);
  auctionGrid.replaceChildren(...visibleAuctions.map(renderCard));
  ongoingGrid.replaceChildren(...previewOngoingAuctions.map(renderOngoingCard));
  ongoingCount.textContent = `${ongoingAuctions.length} active lots`;
  renderFullOngoingAuctions();
  emptyState.classList.toggle("is-hidden", visibleAuctions.length > 0);
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const customer = await authenticate(emailInput.value, passwordInput.value);

  if (!customer) {
    loginError.textContent = "The email or password entered was not recognised.";
    return;
  }

  signIn(customer);
});

document.querySelector("#signOut").addEventListener("click", signOut);
document.querySelector("#signOutOngoing").addEventListener("click", signOut);
document.querySelector("#signOutDetail").addEventListener("click", signOut);
viewOngoingPage.addEventListener("click", showOngoingPage);
backToDashboard.addEventListener("click", showDashboard);
backFromDetail.addEventListener("click", closeAuctionDetail);

ongoingGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ongoing-index]");
  if (button) {
    showAuctionDetail(Number(button.dataset.ongoingIndex), "dashboard");
  }
});

fullOngoingGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ongoing-index]");
  if (button) {
    showAuctionDetail(Number(button.dataset.ongoingIndex), "ongoing");
  }
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

branchFilter.addEventListener("change", (event) => {
  state.branch = event.target.value;
  render();
});

sortOrder.addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

ongoingSearchInput.addEventListener("input", (event) => {
  state.ongoingSearch = event.target.value;
  renderFullOngoingAuctions();
});

ongoingBranchFilter.addEventListener("change", (event) => {
  state.ongoingBranch = event.target.value;
  renderFullOngoingAuctions();
});

ongoingSortOrder.addEventListener("change", (event) => {
  state.ongoingSort = event.target.value;
  renderFullOngoingAuctions();
});

const existingCustomer = customers.find(
  (customer) => customer.id === window.localStorage.getItem("robinsonsCustomerId")
);

if (existingCustomer) {
  signIn(existingCustomer);
}
