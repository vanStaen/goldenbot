const express = require("express");
const router = express.Router();
const { Client } = require("pg");

// Init Postgres
const client = new Client({
  connectionString: process.env.HEROKU_DATABASE_URL,
  ssl: true,
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // This bypasses the SSL verification

// Connect to Postgres
client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  }
});

// GET all users
router.get("/", async (req, res) => {
  try {
    const user = await client.query(`SELECT * FROM users WHERE first_name<>'Telegram' AND first_name<>'Group' ORDER BY activity DESC`);
    res.status(201).json(user.rows);
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});

module.exports = router;
