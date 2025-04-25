const express = require("express")
const postProduct = require("../controllers/postProduct")
const getProducts = require("../controllers/getProducts")
const getOneProduct = require("../controllers/getOneProduct")
const router = express.Router()

router.post("/product",postProduct)
router.get("/product", getProducts)
router.get("/product/:id",getOneProduct)

module.exports = router 