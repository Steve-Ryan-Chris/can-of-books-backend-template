'use strict'

const Book = require('../models/bookModel');

let handlePutBook = (req, res) => {
  const id = req.params.id;
  const updatedData = { ...req.body }
  VerifyUser(req, async (err, user) => {
  if (err) {
    res.send('invalid user');
  } else {
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new:true, overwrite: true});
        res.status(200).send(updatedBook)
      
    } catch (e) {
      res.status(500).send('Server-side error');
    }
    }
  })
}

module.exports = handlePutBook;