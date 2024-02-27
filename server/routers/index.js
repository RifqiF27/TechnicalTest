const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/products", Controller.showProducts);
router.post("/products", Controller.createProduct);
router.put("/products/:id", Controller.editProduct);
router.delete("/products/:id", Controller.deleteProduct);

module.exports = router;
