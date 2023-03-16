const bookModel = require('../models/bookModel');

ObjectID = require('mongodb').ObjectId;
//const { ObjectId } = require("mongodb");

exports.index = async (req, res) => {

    try {
        const book = await bookModel.find();
        res.json(book);
    } catch (error) {

        res.json(error)
        
    }

   /*  const book = await bookModel.find();
    res.json(book); */
    /* const db = await connect();
    const books = await db.collection('book').find().toArray(); */
    //await res.json(book);
    //res.sendFile(path.join(__dirname, "/../Pages/home.html"));
}

exports.store = async (req, res) => {

    try {
        const data = await bookModel.create(req.body);
        res.json(data); 
    } catch (error) {

        res.json(error.message);
        
    }

    
    /* res.json({
        data: "Book is Stored",
    }); */
    /* const data = {
        desciption: "This is a data that is send using Json",
        author: "xyz",
    };
    const db = await connect();
    const r = await db.collection('book').insertOne(req.body);
    console.log(r);
    res.json({
        data: "Book is Stored"
    }) */
}

exports.showOne = async (req, res) => {
    const _id = new ObjectID(req.params.id);

    const book = await bookModel.find(_id);

    /*  const _id = new ObjectID(req.params.id);
     const db = await connect();
     const book = await db
         .collection('book')
         .find({ _id })
         .toArray(); */
    res.json(book);
}
exports.updateOne = async (req, res) => {

    const _id = new ObjectID(req.params.id);
    const updatedData = await bookModel.updateOne({ _id }, { $set: req.body });
    res.json({
        data: "is Updated"
    });
    //res.json(updatedData);

    /*const _id = new ObjectID(req.params.id);
    const db = await connect();
    const data = await db.collection('book').updateOne({ _id }, { $set: req.body });
    res.json(data); */

}

exports.deleteOne = async (req, res) => {

    const _id = new ObjectID(req.params.id);

    const data = await bookModel.deleteOne(_id);

    res.json({
        data: "is Deleted"
    });
    /*  const _id = new ObjectID(req.params.id);
     const db = await connect();
     const data = await db.collection('book').deleteOne({ _id });
     res.json({
         data: "is Deleted"
     }); */
}