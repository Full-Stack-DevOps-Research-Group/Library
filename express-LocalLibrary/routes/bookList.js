var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var books = require('../models/books');
var url = 'mongodb+srv://root:P@ssw0rd@library.b54a2.mongodb.net/Library?retryWrites=true&w=majority';


mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});

// var newbook =  new books({
//   "book_id": "String",
//   "book_name":"String",
//   "author_id":"dfsdf",
//   "user_id":['a','b','c'],
//   "description":"dfgdfgdfgwwww"
// })
// newbook.save(function(err){
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log("data add success");
// })

router.get('/', function(req, res, next) {
	books.find({"book_name" : "String"},function(err,doc){
		if(err){
			res.json({
				status:'1',
				msg:err.message
			})      
		}else{
      var bookName=[];
      for(var i = 0; i < doc.length; i++){
        bookName[i] = doc[i].book_name;
      }
      res.locals = {bookName};
		}
	})
});

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

router.get('/', function(req, res, next) {
  res.render('bookList', { title: 'Books!!'}) 
  });
module.exports = router;