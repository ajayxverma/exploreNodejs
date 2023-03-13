const express = require("express");
const routers = express.Router();
const path = require("path");
const connect = require("./../database/mongoconfig");


routers.route('/')
        .get( (req, res) => {
            
    res.sendFile(path.join(__dirname, "/../Pages/home.html"));
})


routers.get('/:id', (req, res) => {
        res.send(`This book Id is : ${req.params.id}`);
    })

routers


routers.post('/about', async (req, res) => {
    const data = {
        desciption: "This is a data that is send using Json",
        author: "xyz",
    };

    const db = await connect();
    await db.collection('book').insertOne(data);
    
    
    

     

})

module.exports = routers;
