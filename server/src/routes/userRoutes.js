const express = require("express")
const registerUser = require("../controllers/registerUser")
const getUser = require("../controllers/getUser")
const loginUser = require("../controllers/loginUser")
const getUsers = require("../controllers/getUsers")
const getOrders = require("../controllers/getOrders")
const postOrder = require("../controllers/postOrder")
const verifyToken = require("../middlewares/authMiddleware")

const router = express.Router()

router.post("/register", registerUser)
router.get("/getuser/:id", getUser)
router.get("/myOrders",verifyToken, getOrders)
router.post("/postOrder",verifyToken, postOrder)
router.get("/getusers", getUsers)
router.post("/login", loginUser)

module.exports = router