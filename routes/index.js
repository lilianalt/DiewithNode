var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LILIAAANA' });
});

router.get('/p3', function(req, res, next) {
  res.render('p3', { title: 'HELLO' });
});

module.exports = router;
