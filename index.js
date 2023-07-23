const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const products = data.products;
const express = require("express");
const server = express();
server.get("/", (req, res) => {
  // res.send(index);
  // res.end(index);
  // res.sendFile("C:\Users\DELL\Documents\GitHub\Node-js-begginer-to-Advance\index.html")
  // res.json(data)
  // res.sendStatus(404);
  res.status(201).send(index)
});

server.listen(8080, () => {
  console.log("server started");
});
