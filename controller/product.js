const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));
const products = data.products;
//Create POST /products
exports.createProduct = (req, res) => {
  const newData = req.body;
  products.push(newData);
  res.json(products);
};

// Read GET /products
exports.getAllData = (req, res) => {
  res.status(200).json(products);
};

// Read GET /product/:id
exports.getPerticularData = (req, res) => {
  const id = parseInt(req.params.id);
  const result = products.find((p) => p.id === id);
  res.json(result);
};

// UPDATE PUT /product/:id
exports.updateParticularData = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.json("PUT");
};

// PATCH UPDATE DATA AND NEVER DELETE EXISTING DATA
exports.patchParticulatData = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.json("PATCH");
};

// DELETE PERTICULAR DATA
exports.deletePerticularData = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.json(product);
};
