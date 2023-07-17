const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("./Data.json", "utf-8");
const server = http.createServer((req, res) => {
  console.log("server started");
  console.log(req.url);
  res.end(index);
  //   res.setHeader("   Content-Type", "application/json");
});

server.listen(8080);
