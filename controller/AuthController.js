const userAuth = require("../models/userModel");


exports.singUp = async (req, res) => {

    const newUser = await userAuth.create(req.body);

    /* res.json({
        newUser: "User Created",
    }) */
    res.json(newUser);
}

exports.singIn = async (req, res) => {
    
    const findUser = await userAuth.findOne({userEmail:req.body.userEmail})

    if(!findUser) {
        res.status(404).json({
            findUser:"user Not found"
        })
    } else {
        res.json(findUser);
    }

    
    /* res.json({
        newUser: "User found",
    }) */
}

