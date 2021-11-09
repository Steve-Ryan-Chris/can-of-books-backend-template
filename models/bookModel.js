'use strict'
const mongoose = require('mongoose');

// schema for books
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean,
    email:String,
});

// creates model for export to make all instances of Book
const Book = mongoose.model('Books', bookSchema);

module.exports = Book;