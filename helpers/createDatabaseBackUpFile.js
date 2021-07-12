const fs = require('fs');
const { Client } = require("pg");
require('dotenv').config({ path: __dirname + '/./../.env' })

// init Postgres
const client = new Client({ connectionString: process.env.HEROKU_DATABASE_URL, ssl: true })
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; // This bypasses the SSL verification


// Connect to Postgres 
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('Connected to postgres db!')
    }
})

// Fetch content from db
const fetchDatabaseContent = async (table) => {
    try {
        const pictures = await client.query(`SELECT * FROM ${table};`);
        return pictures.rows;
    } catch (err) {
        console.log({ error: `${err})`, });
    }
}

// Write Backup file 
const writeBackupFile = async () => {
    try {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; //Start from 0
        const day = today.getDate();
        const databaseImagesContent = await fetchDatabaseContent('images');
        const databaseUsersContent = await fetchDatabaseContent('users');
        const databaseMessagesContent = await fetchDatabaseContent('messages');
        filenameImages = `images_db_${day}${month}${year}.json`;
        filenameUser = `users_db_${day}${month}${year}.json`;
        filenameMessage = `messages_db_${day}${month}${year}.json`;
        fs.writeFileSync(`../ressources/db_backups/${filenameImages}`, JSON.stringify(databaseImagesContent));
        fs.writeFileSync(`../ressources/db_backups/${filenameUser}`, JSON.stringify(databaseUsersContent));
        fs.writeFileSync(`../ressources/db_backups/${filenameMessage}`, JSON.stringify(databaseMessagesContent));
    } catch (err) {
        console.log({ error: `${err})`, });
    }
};

// Write Backup file 
const excecuteScript = async () => {
    try {
        await writeBackupFile();
        console.log("Backup Success!")
        client.end();
    } catch (err) {
        console.log({ error: `${err})`, });
    }
};

// Running the script
excecuteScript();