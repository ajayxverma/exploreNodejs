const express = require("express");
const routers = express.Router();
const bookController = require("../controller/BookController");

routers.route('/')
    .post(bookController.store)
    .get(bookController.index);

routers.route("/:id").get(bookController.showOne).patch(bookController.updateOne).delete(bookController.deleteOne);

module.exports = routers;
