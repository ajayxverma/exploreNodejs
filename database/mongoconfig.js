/* const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'book';

async function connects() {
    await client.connect();
    const db = await client.db(dbName);
    console.log(db);
    return db;
}


module.exports = connects; */


