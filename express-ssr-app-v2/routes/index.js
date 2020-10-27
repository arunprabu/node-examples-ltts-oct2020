var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // rendering template
  console.log('Handling localhost:3000');
  res.render('index', { title: 'My SSR App!' });
});

module.exports = router;
