'use strict'

const Book = require('../models/bookModel');

let handleDeleteBook = (req, res) => {
  const id = req.params.id;
  const email = user.email;

  VerifyUser(req, async (err, user) => {
  if (err) {
    res.send('invalid user');
  } else {
    try {
      const deletedBook = await Book.findOne({ _id: id, email: email });
      if (deletedBook) {
        await Book.findByIdAndDelete(id);
        res.status(200).send('Book has been ${} deleted')
      } else {
        res.status(404).send('Book ${} was not deleted.')
      }
      
    } catch (e) {
      res.status(500).send('Server-side error');
    }
  }
})
}
}

module.exports = handleDeleteBook;