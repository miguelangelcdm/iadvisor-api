const sourcesRouter = require('express').Router()
// const middleware = require('../utils/middleware')

const { getStockData } = require('../services/IEXCloudService')
const { getCryptoData } = require('../services/coinGeckoService')
const { getMarketNews } = require('../services/newsApiService')


// Route for Stock Data -->
sourcesRouter.get('/stocks/:symbol', async (req, res) => {
    const { symbol } = req.params
    const data = await getStockData(symbol)
    res.json(data)
})

// Route for Crypto Data -->
sourcesRouter.get('/crypto/:symbol', async (req, res) => {
    const { symbol } = req.params
    const data = await getCryptoData(symbol)
    res.json(data)
})

// Route for Market Data -->
sourcesRouter.get('/news', async (req, res) => {
    const data = await getMarketNews()
    res.json(data)
})


module.exports = sourcesRouter