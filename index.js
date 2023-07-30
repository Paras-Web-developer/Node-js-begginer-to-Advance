const express = require("express");
const server = express();
const productController = require("./controller/product");
const productRouter = express.Router();  //======> Express routes
server.use(express.json()); //express.json =======> Middleware
server.use(express.static("public"));
server.use('/api',productRouter) //======> Add_Middle_Rou

// MVC model-view-controller
productRouter
  .post("/post", productController.createProduct)
  .get("/get", productController.getAllData)
  .get("/get/:id", productController.getPerticularData)
  .put("/put/:id", productController.updateParticularData)
  .patch("/patch/:id", productController.patchParticulatData)
  .delete("/delete/:id", productController.deletePerticularData);

server.listen(3000, () => {
  console.log("server started");
});
