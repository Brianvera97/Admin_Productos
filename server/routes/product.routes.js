const express = require("express")
const router = express.Router()

const productController = require("../controllers/product.controller")

router.post("", productController.createProduct)

router.get("", productController.findAllProduct)

router.get("/:id", productController.findProduct)

router.put("/:id", productController.updateProduct)

router.delete("/:id", productController.deleteProduct)

module.exports = router