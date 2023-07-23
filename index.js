const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const error = fs.readFileSync("./error.html", "utf-8");
const server = http.createServer((req, res) => {
  const products = data.products;
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(index);
  } else if (req.url === "/json") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const prd = products.find((p) => p.id == +id);
    res.setHeader("Content-Type", "text/html");
    const modified = index
      .replace("**title**", prd.title)
      .replace("**rating**", prd.rating)
      .replace("**price**", prd.price)
      .replace("**img**", prd.thumbnail)
      .replace("**description**", prd.description);
    res.end(modified);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(error);
  }
  console.log("server started");
});

server.listen(8000);
