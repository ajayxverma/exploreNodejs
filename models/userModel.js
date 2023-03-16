const { Schema, default: mongoose } = require("mongoose");

const bookSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPassWord: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('users', bookSchema, 'users');