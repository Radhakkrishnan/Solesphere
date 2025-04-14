const express = require("express")
const postProduct = require("../controllers/postProduct")
const getProducts = require("../controllers/getProducts")
const router = express.Router()

router.post("/product",postProduct)
router.get("/product", getProducts)

module.exports = router 