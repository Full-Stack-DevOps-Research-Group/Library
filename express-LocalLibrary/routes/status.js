var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb+srv://root:P@ssw0rd@library.b54a2.mongodb.net/Library?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });

/* GET Status. */
router.get('/', function (req, res, next) {
  // res.render('status', { status: 'Online'});
  res.locals = { status: 'Online' };
  next();
});

/* GET MongoDB connection status and render the status page */
mongoose.connection.on("connected", function (err) {
  if (err) {
    console.log("DB connection Error");
  } else {
    console.log("DB connection OK");
  }
  router.get('/', function (req, res, next) {
    res.render('status', { DBstatus: 'Online' })
  });
});
module.exports = router;

