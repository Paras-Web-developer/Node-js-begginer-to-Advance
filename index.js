const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const products = data.products;
const express = require("express");
const morgan = require("morgan"); // npm i  morgan
const server = express();

// Middle Ware (Application Level)
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

// ^^
// ||
// ||
// morgan provide all these information which i get using req
server.use(morgan("default"));  //<<<<============================morgan

// Middle Ware Particular Path (Router) level middle ware

const Auth = (req, res, next) => {
  console.log(req.query); // http://localhost:3000/?password=123
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

// API - Endpoint -Route  using params
server.get("/product/:id", (req, res) => {     //<<<============="/product/:id"  Params
  if (req.params.id == 5) {
    res.status(200).send({ Type: "GET" });
  }
  else{
    res.status(404).send({Type: "ERROR"})
  }
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
