'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const Book = require('./models/bookModel');

const app = express();
app.use(cors());

// connect to mongoose db
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Mongoose is connected')
});

const PORT = process.env.PORT || 3001;

// middleware
app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', handleGetBooks); 

// get request
async function handleGetBooks(req, res){
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
}

// turns on server
app.listen(PORT, () => console.log(`listening on ${PORT}`));
