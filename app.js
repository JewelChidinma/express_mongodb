const express = require ('express')
const { connectToMongoDB } = require ('./db')
const bookRoute = require ('./routes/book')

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

connectToMongoDB()

app.use(express.json())

app.use('/books', bookRoute)

app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})