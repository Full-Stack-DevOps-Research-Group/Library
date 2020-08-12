var express = require('express');
var router = express.Router();

/* GET Status. */
router.get('/', function(req, res, next) {
    res.render('status', { status: 'Online'});
  });

module.exports = router;

