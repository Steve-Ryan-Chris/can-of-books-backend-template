'use strict'

const Book = require('../models/bookModel');

let handleGetBooks =  (req, res) => {
  const email = user.email
  VerifyUser(req, async (err, user) => {
  if (err) {
    res.send('invalid user');
  } else {
    try {
      const books = await Book.find({ email })
      if (books) {
        res.status(200).send(books)
      } else {
        res.status(404).send('no books are available at this time.')
      }
    } catch (e) {
      console.error(e);
      res.status(500).send('sever error')
    }
    };
  }
)
}


module.exports = handleGetBooks;