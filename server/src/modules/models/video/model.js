const { getDb } = require("../../db/mongo");

const collectionName = "videos";
const getCollection = () => {
    const db = getDb();
    const collection = db.collection(collectionName);
    return collection;
};

module.exports = {
    Video: getCollection(),
    name: collectionName,
};
