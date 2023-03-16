const {mongoose} = require('mongoose');


const connectDb = async () => {
    const db = await mongoose.connect('mongodb://0.0.0.0:27017/book');
    return db
}

module.exports = connectDb;



