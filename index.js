const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const data = fs.readFileSync("./Data.json", "utf-8");
const error = fs.readFileSync("./error.html", "utf-8");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/json":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      res.end(error);
      break;
  }
  console.log("server started");
});

server.listen(8000);
