const userAuth = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.singUp = async (req, res) => {
  const userPassWord = await bcrypt.hash(req.body.userPassWord, saltRounds);
  const data = { ...req.body, userPassWord };
  const newUser = await userAuth.create(data);
  res.json({ newUser });
  /* res.json({
        newUser: "User Created",
    }) */
};

exports.singIn = async (req, res) => {
  const findUser = await userAuth.findOne({ userEmail: req.body.userEmail });

  if (!findUser) {
    res.status(404).json({
      findUser: "user Not found",
    });

    return;
  }

  if (!(await bcrypt.compare(req.body.userPassWord, findUser.userPassWord))) {
    res.status(404).json({
      findUser: "user Not found!, Incorrect Email or Password",
    });

    return;
  }
  res.json(findUser);

  /* res.json({
        newUser: "User found",
    }) */
};
