var express = require('express');
var router = express.Router();

/* GET users listing. */
/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to get all users
 *    responses:
 *      '200':
 *        description: A successful response!
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
