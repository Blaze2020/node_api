// app.js
const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const academicRoutes = require('./routes/academicRoutes')
const exhibitionRoutes = require('./routes/exhibitionRoutes')
const app = express()

app.use(bodyParser.json())

app.use('/auth', authRoutes)
app.use('/a1/', academicRoutes)
app.use('/e1/', exhibitionRoutes)

module.exports = app
