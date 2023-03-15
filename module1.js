const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello world",
      })
    );
  }

  if (req.url === '/about') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "This is the About Page ",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Error 404 Page not found ",
      })
    );
  }


});

console.log(`Server is listing at Port: http://localhost:${port}`)
server.listen(port);
