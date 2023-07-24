const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const products = data.products;
const express = require("express");
const server = express();

// Middle Ware (Application Level)
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get("User-Agent")
  );
  next();
});

// Middle Ware Particular Path (Router) level middle ware

const Auth = (req, res, next) => {
  console.log(req.query);
  if (req.body.password == 123) {
    next();
  } else {
    res.sendStatus(400);
  }
};
// server.use(Auth); // This middleware Auth add all routes

// Built-in =======> middleware
// 1. express.static
// 2. express.json
// 3. express.unlencoded

// 1. express.static =======> Middleware
server.use(express.static("public"));   

// 2. express.json =======> Middleware
server.use(express.json());

// 3. express.unlencoded  =======> Middleware
server.use(express.urlencoded());

// API - Endpoint -Route 
server.get("/", Auth, (req, res) => {
  // Auth(middleware) add only this route
  console.log(req.method, req.ip, req.hostname);
  res.status(200).send({ Type: "GET" });
});

server.post("/post", Auth, (req, res) => {
  console.log(req.method, req.ip, req.hostname);
  res.send({ Type: "POST" });
});

server.put("/put", (req, res) => {
  console.log(req.method, req.ip, req.hostname);
  res.json({ Type: "PUT" });
});

server.delete("/delete", (req, res) => {
  console.log(req.method, req.ip, req.hostname);
  res.json({ Type: "DELETE" });
});

server.patch("/patch", (req, res) => {
  res.json({ Type: "PATCH" });
});

server.listen(3000, () => {
  console.log("server started");
});
