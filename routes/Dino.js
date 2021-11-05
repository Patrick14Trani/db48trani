var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dino', { title: 'Search Results: Dino' });
});

module.exports = router;
