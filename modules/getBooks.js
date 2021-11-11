'use strict'

const Book = require('../models/bookModel');

let handleGetBooks = async (req, res) => {
  let  queryObj = {};
  if (req.query.status) {
    queryObj = {status: req.query.status}
  }
  try {
    let booksFromDB = await Book.find({});
    if (booksFromDB) {
    res.status(200).send(booksFromDB);
    } else {
      res.status(404).send('no books are available at this time.')
    }
    } catch (e) {
    console.error(e);
    res.status(500).send('sever error')
  }
};

module.exports = handleGetBooks;