const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

let _db = null;
const connect = async () => {
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log(`Connecting to MongoDB...`);
    _db = client.db("videodb");
    console.log(`Connected to MongoDB`);
    return _db;
};

const getDb = () => {
    return _db;
};

module.exports = {
    connect,
    getDb,
};
