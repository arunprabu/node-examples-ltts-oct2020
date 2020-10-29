var express = require('express');
var router = express.Router();

//localhost:3000/users
router.get('/', function(req, res, next) {
  res.send(`<a href='http://localhost:3000/users/register'>Register here</a>`);
});


/* GET users/register listing. */
router.get('/register', function(req, res, next) {
  res.render('form', {title: 'User Registration Page'});
});

router.post('/register', function(req, res, next) {
  res.json(req.body);

  // complete the signup process
  // and then send the resp back
});

// first hit this one to set cookie
router.post('/login', function(req, res, next) {
  // after successful authentication create cookie with session id.
  // and then send it to front end.

  res.cookie('session_id', '123456789');
  res.status(200).json({msg: 'You are logged in'});
});

// cookie validator middleware
function validateCookie(req, res, next){
  const { cookies } = req;
  console.log(cookies);
  if('session_id' in cookies){
    console.log('Session Id found!');
    if(cookies.session_id == '123456789'){
      console.log('User is authenticated');
      next();
    }else{
      res.status(403).json({msg: 'User is not Authenticated'});
    }
  }else{
    res.status(403).json({msg: 'User is not Authenticated'});
  }
}

// checking whether the req is carrying cookie or not. 
router.get('/dashboard', validateCookie, function(req, res, next){
  console.log(req.headers.cookie);
  res.status(200).json({msg: 'Dashboard'});
});

module.exports = router;
