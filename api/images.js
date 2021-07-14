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
    const user = await client.query(`SELECT * FROM images ORDER BY date_added DESC`);
    res.status(201).json(user.rows);
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});


// return image ID based on file_path
router.post("/id", async (req, res) => {
  try {
    const user = await client.query(`SELECT * FROM images WHERE file_path='${req.body.file_path}'`);
    res.status(201).json(user.rows[0].id);
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});


// DELETE single file object from s3 (based on key)
router.delete("/", async (req, res) => {

  key =  req.body.file_path
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_ID,
      Key: req.params.key,
    };
    await Promise.all([
      s3.deleteObject(params, function (err, data) {
        if (err) console.log(err, err.stack);  // error
        else     console.log(data);            // deleted
      })
    ]);
    const deleteImage = `DELETE FROM images WHERE file_path='${req.params.key}';`;
    await client.query(deleteImage);
    res
      .status(200)
      .json({ success: `Image "${req.params.key}" was deleted.` });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

module.exports = router;
