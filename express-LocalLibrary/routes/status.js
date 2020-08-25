var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost/devtest');

/* GET Status. */
router.get('/', function(req, res, next) {
    // res.render('status', { status: 'Online'});
    res.locals =  { status: 'Online'};
    next();
  });

/* GET MongoDB connection status and render the status page */
mongoose.connection.on("connected", function(){
    console.log("DB connection OK");
    router.get('/', function(req, res, next) {
      res.render('status', { DBstatus: 'Online'}) 
    });
  });
module.exports = router;

