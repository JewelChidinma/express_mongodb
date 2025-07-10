const express = require('express')
const BookModel = require('../model/book')

const bookRoute = express.Router()

//get all books
bookRoute.get('/', (req, res) => {
    BookModel.find({})
        .then((books) => {
            res.status(200).send(books)
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
})
//get books by id
bookRoute.get('/:id', (req, res) => {
    const id = req.params.id
    BookModel.findById(id)
        .then((book) => {
            res.status(200).send(book)
        }).catch((err) => {
            console.log(err)
            res.status(400).send(err)
        })
})
//create book
bookRoute.post('/', (req, res) => {
    const book = req.body
    console.log(book)

    BookModel.create(book)
        .then((book) => {
            res.status(201).send({
                message: "Book added successfully",
                data: book
            })

        }).catch((err) => {
            res.status(400).send(err)

        })
})
//update book by id
bookRoute.put('/:id', (req, res) => {
    const id = req.params.id
    const book = req.body
    BookModel.findByIdAndUpdate(id, book, { new: true })
        .then((book) => {
            res.status(200).send(book)
        }).catch((err) => {
            console.log(err)
            res.status(400).send(err)
        })
})
//delete book by id
bookRoute.delete('/:id', (req, res) => {
    const id = req.params.id
    BookModel.findByIdAndDelete(id)
        .then((book) => {
            res.status(200).send({
                message: 'Deletion successful',
                data: ''
            })

        }).catch((err) => {
            console.log(err)
            res.status(400).send(err)
        })
})


module.exports = bookRoute