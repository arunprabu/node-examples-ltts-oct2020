const express = require('express');
const authService = require('../../services/authService');
const router = express.Router();

/* GET signup listing. */
router.post('/signup', (req, res, next) => {

  authService.signup(req, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  })

});

/* GET auth listing. */
router.post('/login', (req, res, next) => {

  authService.login(req, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  })

});

module.exports = router;