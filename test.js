const http = require("http");
const fs = require("fs");
const indexHtml = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const server = http.createServer((req, res) => {
  const products = data.products;
  if (req.url === "/") {
    res.setHeader("Content-Type", "test.html");
    const replace = indexHtml.replace("**rating**", "paras");
    res.end(replace);
  } else if (req.url === "/json") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else if (req.url.startsWith("/product")) {
    const url = req.url.split("/");
    console.log(url);
    const value = url.length - 1;
    const id = url[value];
    console.log(id);
    const prd = products.find((p) => p.id === +id);
    // console.log(prd);
    const modified = indexHtml
      .replace("**title**", prd.title)
      .replace("rating", prd.rating)
      .replace("**img**", prd.thumbnail)
      .replace("**description**", prd.description)
      .replace("**rating**", prd.rating)
      .replace("**price**", prd.price);
    res.end(modified);
  }
});
server.listen(8000);
