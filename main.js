const express = require("express");
const app = express();

const port = 3001;
const routes = require("./routers/routes.js");

//console.log(routes)
app.use(routes)

app.listen(port, () => {
    console.log(`This app is listening at Port : ${port}`);
})