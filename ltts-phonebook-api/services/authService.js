const passport = require('passport');

const User = require("../models/user");

//signup 
exports.signup = (req, callback) => {
  console.log(req.body);

  let userDao = new User(req.body);

  // temp password 
  // Note: If you are not getting p/w from the user. try generating temp password 
  // using npm i generate-password

  // 1. get salt, hash generated for the password 
  userDao.setPassword(req.body.password);
  console.log(userDao);
  // 2. exec query to save the user object
  userDao.save((err, data) => {
    let resp;
    if (!err) {
      console.log(`Saved Successfully! ${data}`);
      resp = {
        status: 'Saved Successfully!. Check your email'
      }
      // 3. if saved successfully, send email 
      // Refer: https://www.npmjs.com/package/@sendgrid/mail 
    } else {
      console.log(err);
      resp = data;
    }

    callback(err, resp);
  });

}

//login 
exports.login = (req, callback) => {
  console.log(req.body);

  // auth flow using passport
  passport.authenticate('local', function(err, user, info) {
    // if err
    if (err) {
			callback(err);
    }
    // if user is found -- upon successful authentication,
    if(user){      
			
			var userData = {  
        email: user.email,
        token: user.generateJWT() // generate token and send it to the front end
      }
      callback(err, userData);
    }else {
			// If user is not found, send the following from routes
			//res.status(401).json(info);
			callback(err, info);
		}
  })(req, callback);
  
}