// services/iexCloudService.js
require('dotenv').config()
const axios = require('axios');
const logger = require('../utils/logger');

const getStockData = async (symbol) => {
  try {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote`, {
      params: {
        token: process.env.IEX_CLOUD_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    logger.error("IEX Cloud API error:", error.message);
    throw error;
  }
};

module.exports = { getStockData };
