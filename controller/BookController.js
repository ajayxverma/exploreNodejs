const connect = require("./../database/mongoconfig");
ObjectID = require('mongodb').ObjectId;
//const { ObjectId } = require("mongodb");

exports.index = async (req, res) => {
    const db = await connect();
    const books = await db.collection('book').find().toArray();
    await res.json(books);
    //res.sendFile(path.join(__dirname, "/../Pages/home.html"));
}

exports.store = async (req, res) => {
    const data = {
        desciption: "This is a data that is send using Json",
        author: "xyz",
    };
    const db = await connect();
    const r = await db.collection('book').insertOne(req.body);
    console.log(r);
    res.json({
        data: "Book is Stored"
    })
}

exports.showOne = async (req, res) => {
    const _id = new ObjectID(req.params.id);
    const db = await connect();
    const book = await db
        .collection('book')
        .find({ _id })
        .toArray();
    res.json(book)

}
exports.updateOne = async (req, res) => {
    const _id = new ObjectID(req.params.id);
    const db = await connect();
    const data = await db.collection('book').updateOne({ _id }, { $set: req.body });
    res.json(data);
}

exports.deleteOne = async (req, res) => {
    const _id = new ObjectID(req.params.id);
    const db = await connect();
    const data = await db.collection('book').deleteOne({ _id });
    res.json({
        data: "is Deleted"
    });
}