const { Schema, default: mongoose } = require("mongoose");

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('book', bookSchema, 'book');