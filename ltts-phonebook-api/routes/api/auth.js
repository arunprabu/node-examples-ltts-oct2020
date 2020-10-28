const express = require('express');
const router = express.Router();

/* GET signup listing. */
router.post('/signup', (req, res, next) => {
  
  res.json({status: ' Not implemented yet'});

});

/* GET auth listing. */
router.post('/login', (req, res, next) => {
  
  res.json({status: ' Not implemented yet'});
  
});

module.exports = router;