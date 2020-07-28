const { customError } = require("./error.js");
const { MongoDB } = require("./mongoConnection.js");

const insertOne = async (coll, data) => {
    try {
        // get the conection
        const myDb = await MongoDB.createConection();

        // insert a new document
        const result = await myDb.collection(coll).insertOne(data);

        return result;
    }  catch (e) {
        throw customError("Error MongoDB", "insertOne", 500, e);
    }
}

const findOne = async (coll, data) => {
    try {
        // get the conection
        const myDb = await MongoDB.createConection();

        // get the document
        const result = await myDb.collection(coll).findOne(data);

        return result;
    }  catch (e) {
        throw customError("Error MongoDB", "findOne", 500, e);
    }
}

const findCon = async (coll, data) => {
    try {
        // get the conection
        const myDb = await MongoDB.createConection();

        // get the document
        const result = await myDb.collection(coll).find(data).toArray();

        return result;
    }  catch (e) {
        throw customError("Error MongoDB", "findCon", 500, e);
    }
}

module.exports.insertOne = insertOne;
module.exports.findOne = findOne;
module.exports.findCon = findCon;

