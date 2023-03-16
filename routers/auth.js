const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/AuthController");

authRouter.route("/auth").post(authController.singUp).get(authController.singIn);

module.exports = authRouter;