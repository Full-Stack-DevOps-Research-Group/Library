var express = require('express');
var router = express.Router();
var Books = require('../models/books');


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