const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./products.db", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to database.");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS customer (
    customerId INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    creditCardNumber TEXT NOT NULL
  )
`);

module.exports = db;
