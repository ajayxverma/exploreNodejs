const express = require("express");
const routers = express.Router();
const bookroute = require("./bookroute");

routers.use(bookroute);

routers.get("/", (req, res) => {
    res.send("Hello world")
})

routers.all('/*', (req, res) => {
    res.send("Page not found");
});



module.exports = routers;
