DROP TABLE IF EXISTS bids;
DROP TABLE IF EXISTS ongoing_auctions;
DROP TABLE IF EXISTS won_auctions;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS branches;

CREATE TABLE branches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL UNIQUE,
  region VARCHAR(80) NOT NULL
);

CREATE TABLE customers (
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL UNIQUE,
  password_hash CHAR(64) NOT NULL,
  preferred_branch_id INT NOT NULL,
  theme VARCHAR(40) NOT NULL DEFAULT 'heritage',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_customers_preferred_branch
    FOREIGN KEY (preferred_branch_id) REFERENCES branches(id)
);

CREATE TABLE won_auctions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id VARCHAR(20) NOT NULL,
  branch_id INT NOT NULL,
  title VARCHAR(180) NOT NULL,
  description TEXT NOT NULL,
  auction_date DATE NOT NULL,
  final_bid DECIMAL(10, 2) NOT NULL,
  image_file VARCHAR(255),
  palette_json JSON NOT NULL,
  CONSTRAINT fk_won_customer
    FOREIGN KEY (customer_id) REFERENCES customers(id),
  CONSTRAINT fk_won_branch
    FOREIGN KEY (branch_id) REFERENCES branches(id),
  INDEX idx_won_customer_date (customer_id, auction_date)
);

CREATE TABLE ongoing_auctions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  branch_id INT NOT NULL,
  title VARCHAR(180) NOT NULL,
  description TEXT NOT NULL,
  close_date DATE NOT NULL,
  current_bid DECIMAL(10, 2) NOT NULL,
  bid_count INT NOT NULL DEFAULT 0,
  image_file VARCHAR(255),
  palette_json JSON NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  CONSTRAINT fk_ongoing_branch
    FOREIGN KEY (branch_id) REFERENCES branches(id),
  INDEX idx_ongoing_status_close (status, close_date)
);

CREATE TABLE bids (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ongoing_auction_id INT NOT NULL,
  customer_id VARCHAR(20) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  placed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_bids_auction
    FOREIGN KEY (ongoing_auction_id) REFERENCES ongoing_auctions(id),
  CONSTRAINT fk_bids_customer
    FOREIGN KEY (customer_id) REFERENCES customers(id),
  INDEX idx_bids_auction_amount (ongoing_auction_id, amount)
);
