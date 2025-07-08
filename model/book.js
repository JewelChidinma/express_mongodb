const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const BookModel = newSchema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: [2025, 'Year must be less than or equal to 2025']
    },
    isbn: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})