'use strict'

const Book = require('../models/bookModel');

let handlePostBook = (req, res) => {
  const newBook = { ...req.body, email: user.email}
  VerifyUser(req, async (err, user) => {
  if (err) {
    res.send('invalid user');
  } else {
    try {
      console.log(req.body);
      const postBook = await Book.create(newBook);
      res.status(201).send(postBook);
    } catch (e) {
      res.status(500).send('Error. Book was not created');
    }
    };
  }
)
}


module.exports = handlePostBook;