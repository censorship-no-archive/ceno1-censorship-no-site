var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('en/index', { title: 'CeNo!' });
});

router.get('/:language', function (req, res) {
  var language = req.params.language;
  res.render(language + '/index', { title: 'CeNo!' });
});

module.exports = router;
