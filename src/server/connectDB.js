import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/mgm';
let db = null;

export async function connectDB() {
    if (db) return db;
    let client = await MongoClient.connect(url, {useNewUrlParse: true});
    db = client.db();
    console.info("Got DB", db);
    return db;
}

