require("dotenv").config()
const connect = require("./src/config/connect")
const express = require("express")
const path = require('path')
const cors = require("cors")
const productRoute = require("../server/src/routes/productRoute")


const app = express()
app.use("/image", express.static(path.join(__dirname,'images')))

app.use(express.json())
app.use(cors())
app.use(productRoute)

const PORT = process.env.PORT || 5000
connect()

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT: ${PORT}`)
})