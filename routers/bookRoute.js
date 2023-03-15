const express = require("express");
const routers = express.Router();
const bookController = require("./../controller/BookController");

routers.route('/')
    .get(bookController.index).post(bookController.store);

routers.route("/:id").get(bookController.showOne).patch(bookController.updateOne).delete(bookController.deleteOne);

module.exports = routers;
