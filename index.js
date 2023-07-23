const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const products = data.products;
const express = require("express");
const server = express();


// API - Endpoint -Route
server.get("/", (req, res) => {
  res.status(200).send({ Type: "GET" });
});

server.post("/post", (req, res) => {
  res.send({ Type: "POST" });
});

server.put("/put", (req, res) => {
  res.json({ Type: "PUT" });
});

server.delete("/delete", (req, res) => {
  res.json({ Type: "DELETE" });
});

server.patch("/patch", (req, res) => {
  res.json({ Type: "PATCH" });
});

server.listen(8080, () => {
  console.log("server started");
});
