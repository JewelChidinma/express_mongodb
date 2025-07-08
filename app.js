const express = require ('express')
const { connectToMongoDB } = require ('./db')

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

connectToMongoDB()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})