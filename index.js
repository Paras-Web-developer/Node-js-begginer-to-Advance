const fs = require("fs");
const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const products = data.products;
const express = require("express");
const morgan = require("morgan"); // npm i  morgan
const server = express();

server.use(express.json()); //express.json =======> Middleware

// Middle Ware Particular Path (Router) level middle ware
// const Auth = (req, res, next) => {
//   console.log(req.query); // http://localhost:3000/?password=123
//   if (req.query.password == 123) {
//     next();
//   } else {
//     res.sendStatus(400);
//   }
// };

// ========>>>>>>>> C R U D ======>>>>CREATE READ UPDATE DELETE

//Create POST /products
server.post("/post", (req, res) => {
  const newData = req.body;
  products.push(newData);
  res.json(products);
});

// Read GET /products
server.get("/get", (req, res) => {
  res.status(200).json(products);
});

// Read GET /product/:id
server.get("/get/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = products.find((p) => p.id === id);
  res.json(result);
});

// UPDATE PUT /product/:id
server.put("/put/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.json("PUT");
});

// PATCH 
server.patch("/patch/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, {...product, ...req.body});
  res.json("PATCH");
});



server.delete("/delete/:id", (req, res) => {
  const id = +req.params.id
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex];
  products.splice(productIndex, 1)
  res.json(product);
});


server.listen(3000, () => {
  console.log("server started");
});
