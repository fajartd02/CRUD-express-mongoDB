const MongoClient = require('mongodb').MongoClient;
const connection = 'mongodb://localhost:27017/userDB';

const db = new MongoClient(connection);

const connectDB = async () => {
    try {
        await db.connect();
    } catch (err) {
        console.log(err);
    }
}

connectDB();


module.exports = db;