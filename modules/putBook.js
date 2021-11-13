'use strict'

const Book = require('../models/bookModel');

let handlePutBook = async (req, res) => {
  const id = req.params.id;
  const updatedData = { ...req.body }
  try {
      const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new:true, overwrite: true});
      res.status(200).send(updatedBook)
    
  } catch (e) {
    res.status(500).send('Server-side error');
  }
}

module.exports = handlePutBook;