const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    book_id: { type: Array, required: false },
});

module.exports = mongoose.model('Users', booksSchema);