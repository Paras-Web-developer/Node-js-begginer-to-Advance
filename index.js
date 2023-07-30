const express = require("express");
const server = express();
server.use(express.json()); //express.json =======> Middleware
server.use(express.static("public"));
const productRouter = express.Router();
const productController = require("./controller/product");
// >>>>>>>>>>> C R U D >>>>>>>>>>>> CREATE READ UPDATE DELETE

// MVC model-view-controller
server
  .post("/post", productController.createProduct)
  .get("/get", productController.getAllData)
  .get("/get/:id", productController.getPerticularData)
  .put("/put/:id", productController.updateParticularData)
  .patch("/patch/:id", productController.patchParticulatData)
  .delete("/delete/:id", productController.deletePerticularData);

server.listen(3000, () => {
  console.log("server started");
});
