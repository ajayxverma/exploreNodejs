const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end("This is the Home Page");
  }

  if(req.url === '/about') {
    res.end("This is the about page");
  }

  res.end (
    `<h1>Opps This page does not exist</h1>
    <h2>Pleas visit the home page </h2>
    <a href="/">back Home</a>`
  )
});

server.listen(5000);