const express = require('express')
require('dotenv').config()

const coinsRouter = require('./routers/coins')

const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(coinsRouter)


app.listen(port, () => {
    console.log('Server is listening on port: ' + port)
})

