const express = require('express');
const router = require("./routers/script.js")
const app = express()
const { config } = require('dotenv')

config()
app.use(express.json())
app.use("/", router)

module.exports = app