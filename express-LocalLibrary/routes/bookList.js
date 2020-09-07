var express = require('express');
var router = express.Router();
var Books = require('../models/books');

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

router.use('/', (req, res, next) => {
	var result;

	Books.find(function (err, disk) {
		if (err) {
			throw err;
		}
		result = disk;
		// this belongs inside your db callback
		res.render('bookList',
			{
				'books': result
			});
	});
});

router.get('/book_id/:id', function (req, res, next) {
	books.find({ _id: req.params.id }, function (err, doc) {
		if (err) {
			res.json({
				status: '1',
				msg: err.message
			})
		} else {
			res.status(200).json(doc);
		}

	})
});
module.exports = router;