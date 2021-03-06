const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/bookModel.js');

// clears database
async function clear() {
    mongoose.connect(process.env.DB_URL);
    try {
        await Book.deleteMany({});
        console.log('Books cleared');
    } catch (err) {
        console.error(err) 
    } finally {
        mongoose.disconnect();
    }
}

clear ();