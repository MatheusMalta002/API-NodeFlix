const express = require('express')
const app = express()
const movieRouter = require('./router/movieRoute')

app.use('/api/movies', movieRouter)

module.exports = app


