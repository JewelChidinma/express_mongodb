const express = require('express')
const BookModel = require('../model/book')

const bookRoute = express.Router()


bookRoute.get('/', (req, res) => {
    BookModel.find({})
        .then((books) => {
            res.status(200).send(books)
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err.message)
        })
})

bookRoute.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('Get book by ID')
})

bookRoute.post('/', (req, res) => {
    const book = req.body
    console.log(book)
    res.send('Book added')
})

bookRoute.put('/:id', (req, res) => {
    const id = req.params.id
    console.log('Updating book with id' + id)
    res.send('Book updated')
})

bookRoute.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log('Deleting book with id' + id)
    res.send('Book deleted')
})


module.exports = bookRoute