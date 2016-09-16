var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send("Hello World");
  res.render('index', { title: 'Awesome Answers 1' });
});

module.exports = router;
