const { Schema, model, Mongoose } = require('mongoose');
const BookSchema = Schema({
    title_book: {
        type: String,
        require: true
    },
    isbn_book: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
    },
    editorial: {
        type: String,
        require: true
    },
    date_publication: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})


module.exports = model('Book', BookSchema)