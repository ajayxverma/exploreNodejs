const express = require("express");
const app = express();
//const bodyParser = require('body-parser')
const routes = require("./routers/routes.js");



const port = 3001;
//console.log(routes)

/* app.use(express.json);
app.use(express.urlencoded); */
//app.use(bodyParserError);
//app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
//app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`This app is listening at Port : ${port}`);
})