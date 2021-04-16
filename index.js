const express = require('express')
const cors = require('cors')
const helmet = require("helmet")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(helmet())
app.use(cors())

const api = require('./routes/api')

app.use('/api', api)

module.exports = app