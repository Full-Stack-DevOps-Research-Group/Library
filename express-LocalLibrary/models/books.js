const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    user_id: { type: Array, required: false },
    author_id: { type: Array, required: false },
    quantity:{type:Number,required:true}
});

module.exports = mongoose.model('Books', booksSchema, 'Books');
