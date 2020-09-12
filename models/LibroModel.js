const { Schema, model } = require('mongoose');

const libroSchema = Schema({
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
        type: Date,
        require: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    }

})


module.exports = model('Libro', libroSchema)