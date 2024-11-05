const config = require('./utils/config')
const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const sourcesRouter = require('./controllers/sources.js')

logger.info('connecting to',config.MONGODB_URI)

// Connect to MongoDB
async function connectToMongoBD() {
  await mongoose.connect(config.MONGODB_URI)
  logger.info('connected to MONGODB')
}

connectToMongoBD()

app.use(cors())
// app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

// Basic route to check server
app.get('/', (req, res) => {
  res.send('Investment Advisor API')
})

app.use('/api',sourcesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports=app


  