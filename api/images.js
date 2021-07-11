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

// GET all images
router.get("/", async (req, res) => {
  try {
    const user = await client.query(`SELECT * FROM images ORDER BY id DESC`);
    res.status(201).json(user.rows);
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});

// UPDATE user meetup
router.post("/user", async (req, res) => {
  try {
    const query = `UPDATE images SET date_added='${req.body.date}', author_id='${req.body.user}' WHERE id=${req.body.id}`;
    await client.query(query);
    res.status(201).json({ message: "Success! Image data have been updated." });
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});

module.exports = router;
