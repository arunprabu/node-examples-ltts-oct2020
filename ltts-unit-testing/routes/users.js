var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([{ name: 'a' }, { name: 'b' }]);
});

module.exports = router;
