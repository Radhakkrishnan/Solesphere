require("dotenv").config()
const connect = require("./src/config/connect")
const express = require("express")
const cors = require("cors")
connect()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT: ${PORT}`)
})