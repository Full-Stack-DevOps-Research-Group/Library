var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var books = require('../models/books');
var url = 'mongodb+srv://root:P@ssw0rd@library.b54a2.mongodb.net/Library?retryWrites=true&w=majority';


mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});


//Query data from books collection
router.get('/', function(req, res, next) {
	books.find({},function(err,doc){
		if(err){
			res.json({
				status:'1',
				msg:err.message
			})      
		}else{
			res.locals = {
				bList : doc,
			};
			res.render('bookList', { title: 'Booklist' });
		}
	})
});


//Query books collection by id
router.get('/book_id/:id', function(req, res, next) {
	books.find({_id : req.params.id},function(err,doc){
		if(err){
			res.json({
				status:'1',
				msg:err.message
			})      
		}else{
      res.status(200).json(doc);
		}
 
	})
});


module.exports = router;