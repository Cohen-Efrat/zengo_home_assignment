const express = require('express')
const router = new express.Router()
const {calcAllCoins,parserResult} = require('../utils')

router.get('/coins/:coins/:timestamp', async (req, res) => {
    const {coins,timestamp} = req.params;
    try {
        let result = await calcAllCoins(coins,timestamp)
        result.sort((a,b)=>a.value - b.value)
        result = parserResult(result)
        res.status(201).json(result)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})



module.exports = router