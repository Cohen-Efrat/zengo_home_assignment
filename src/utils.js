const axios = require('axios')
const {getData} = require('./cryptocompare')

const calcPercentage = (x,y)=>{
    return ((y-x)/x)*100 
}

const calcAllCoins = async (coins,timestamp)=>{
    const time = new Date(timestamp).getTime() / 1000;
    const today = Math.round(new Date().getTime() / 1000)
    const timeResult = await getData(coins,time)
    const todayResult = await getData(coins,today)
    const result = Object.keys(timeResult).map((currency) =>{
        const res = calcPercentage(timeResult[currency],todayResult[currency])
        return {currency,value: res}
      });
    return result;
}

const parserResult = (result)=>{
    result = result.map((obj)=>{
        const res ={}
        res[obj.currency] = obj.value+"%"
          return res
        });
    return result
}

module.exports = {calcPercentage,calcAllCoins,parserResult}