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
    const user = await client.query(`SELECT * FROM users`);
    res.status(201).json(user.rows);
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// get Single User based on telegram_id
router.post("/single", async (req, res) => {
  try {
    const user = await client.query(`SELECT * FROM users WHERE telegram_id='${req.body.id}'`);
    res.status(201).json(user.rows);
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
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
      error: `${err}`,
    });
  }
});

// UPDATE user main_image
router.post("/main_image", async (req, res) => {
  try {
    const user = await client.query(`SELECT * FROM users WHERE telegram_id='${req.body.telegram_id}'`);
    if (user.length > 0 ) {
      res.status(400).json({
        error: `User already exist in database`,
      });
    }
    const query = `UPDATE users SET main_image='${req.body.pic_id}' WHERE telegram_id='${req.body.telegram_id}'`
    await client.query(query);
    res.status(201).json({"message" : "Success! Main image has been updated."});
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// Add new user 
router.post("/new", async (req, res) => {
  try {
    const query = `INSERT INTO users(telegram_id, joined_date) VALUES ('${req.body.telegram_id}', '${req.body.joined_date}');`
    await client.query(query);
    res.status(201).json({"message" : "Success! New user has been added."});
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});

// UPDATE user join_date
router.post("/joined", async (req, res) => {
  try {
    const query = `UPDATE users SET joined_date='${req.body.joined_date}' WHERE telegram_id='${req.body.telegram_id}'`
    await client.query(query);
    res.status(201).json({"message" : "Success! Joined date has been updated."});
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});

module.exports = router;
