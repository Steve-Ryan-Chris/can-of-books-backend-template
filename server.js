'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const Book = require('./models/bookModel');

const app = express();
app.use(cors());
app.use(express.json());

// connect to mongoose db
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Mongoose is connected')
});

// port
const PORT = process.env.PORT || 3001;

// modules
const proofOfLife=require("./modules/proof.js");
const testing = require('./modules/test');

const handleGetBooks = require('./modules/getBooks');
const handlePostBook = require('./modules/postBook');
const handleDeleteBook = require('./modules/deleteBook');
const handlePutBook = require('./modules/PutBook');

// middleware
app.get('/test', testing);
app.get('/', proofOfLife); 

app.get('/books', handleGetBooks); 
app.post('/books', handlePostBook);
app.delete('/books/:id', handleDeleteBook); 
app.put('/books/:id' , handlePutBook);

//Auth
function getUser(req, res) {

VerifyUser(req, (err, user) => {
  if (err) {
    res.send('invalid user');
  } else {
    res.send(user);
  }
})
}


// activates server
app.listen(PORT, () => console.log(`listening on ${PORT}`));
