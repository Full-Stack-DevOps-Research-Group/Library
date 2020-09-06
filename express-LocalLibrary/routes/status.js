var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const Books = require('../models/books');
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://root:P@ssw0rd@library.b54a2.mongodb.net/Library?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });

/* GET Status. */
router.get('/', function (req, res, next) {
  // res.render('status', { status: 'Online'});
  res.locals = { status: 'Online' };
  next();
});

/* GET MongoDB connection status and render the status page */
mongoose.connection.on("connected", function(err){
  if(err){
    console.log("DB connection not OK")
    router.get('/', function(req, res, next) {
      res.render('status', { DBstatus: 'Offline'}) 
      });
  }else {
    console.log("DB connection OK")
    router.get('/', function(req, res, next) {
      res.render('status', { DBstatus: 'Online'}) 
      });
  }
});

mongoose.connection.on("disconnected", function(){
  console.log("DB connection not OK")
      router.get('/', function(req, res, next) {
        res.render('status', { DBstatus: 'Offline'}) 
        });
})

//save the books datas
router.post('/api/stuff', (req, res, next) => {
  const book = new Books({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    quantity: req.body.quantity,
    user_id: req.body.user_id,
    author_id: req.body.author_id
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

//get all books datas
router.use('/api/stuff', (req, res, next) => {
  Books.find().then(
    (books) => {
      res.status(200).json(books);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

//get the specific book
router.get('/api/stuff/:id', (req, res, next) => {
  Books.findOne({
    _id: req.params.id
  }).then(
    (book) => {
      res.status(200).json(book);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});
module.exports = router;

