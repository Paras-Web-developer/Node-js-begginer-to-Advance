const http = require("http");

const data = { name: "paras", age: 21 };
const server = http.createServer((req, res) => {
  console.log("server started");
  console.log(req.url)
  //   res.end("<h1>Hello<h1/>");
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

server.listen(8080);
