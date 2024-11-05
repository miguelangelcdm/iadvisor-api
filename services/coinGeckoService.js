// services/coinGeckoService.js
const axios = require('axios');
const logger = require('../utils/logger');

const getCryptoData = async (cryptoId) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
      params: {
        ids: cryptoId,        // e.g., "bitcoin"
        vs_currencies: 'usd', // or other currency like 'eur'
      },
    });
    return response.data;
  } catch (error) {
    logger.error("CoinGecko API error:", error.message);
    throw error;
  }
};

module.exports = { getCryptoData }

