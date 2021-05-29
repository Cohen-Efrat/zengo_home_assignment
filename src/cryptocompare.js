const axios = require('axios')

const getData = async(coins,timestamp)=>{
    const baseCurrency='USD'
   const result = await axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${baseCurrency}&tsyms=${coins}&ts=${timestamp}&api_key=${process.env.CRYPTO_API_KEY}`);
   return result.data[baseCurrency]
}

module.exports = {getData}