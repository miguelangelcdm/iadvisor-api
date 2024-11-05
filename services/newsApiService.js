require('dotenv').config()
// services/newsApiService.js
const axios = require('axios');
const logger = require('../utils/logger')

const getMarketNews = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: 'market OR stocks OR finance',
        language: 'en',
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    logger.error("News API error:", error.message);
    throw error;
  }
};

module.exports = { getMarketNews };
