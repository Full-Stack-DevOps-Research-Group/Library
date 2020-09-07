const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    book_id: { type: Array, required: false }
});

module.exports = mongoose.model('Authors', booksSchema);