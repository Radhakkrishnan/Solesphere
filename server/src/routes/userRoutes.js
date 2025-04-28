const express = require("express")
const registerUser = require("../controllers/registerUser")
const getUser = require("../controllers/getUser")
const loginUser = require("../controllers/loginUser")
const getUsers = require("../controllers/getUsers")

const router = express.Router()

router.post("/register", registerUser)
router.get("/getuser/:id", getUser)
router.get("/getusers", getUsers)
router.post("/login", loginUser)

module.exports = router