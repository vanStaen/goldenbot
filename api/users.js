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

// get SIngle User based on telegram_id
router.post("/single", async (req, res) => {
  try {
    const user = await client.query(`SELECT * FROM users WHERE telegram_id='${req.body.id}'`);
    res.status(201).json(user.rows);
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});



// UPDATE user meetup
router.post("/meetup", async (req, res) => {
  try {
    const query = `UPDATE users SET last_meetup='${req.body.last_meetup}' WHERE id=${req.body.id}`
    await client.query(query);
    res.status(201).json({"message" : "Success! Meetup presence has been recorded."});
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});

module.exports = router;
