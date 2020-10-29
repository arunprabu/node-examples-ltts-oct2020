const autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require('./mongo'); //importing connection config

// mongoose.Schema is a class - creating an obj for it 
var User = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true
  },
  name: String,
  email: {
    unique: true,
    type: String
  },
  salt: String,
  hash: String,
  isEmailVerified: Boolean,
  status: Boolean,
  createdBy : String,
  createdOn : {type: Date, default: Date.now},
  updatedBy : String,
  updatedOn : {type: Date, default: Date.now}
});

// util method - to encrypt password using salt 
// then, you will get the relevant hash for the password
User.methods.setPassword = function(password){  // 1. get the original password
  // create salt to be applied on the password -- to get the hash
  this.salt = crypto.randomBytes(16).toString('hex');   
  console.log(this.salt);
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  console.log(this.hash);
}

// validatePassword 
// take in password as input 
//validating password and returning true or false
User.methods.validatePassword = function(password) {
  console.log(this.salt);
	const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return this.hash === hash;
};

// token will be generated only if the user is authenticated
User.methods.generateJWT = function(){
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 45);
  
  return jwt.sign({
    email: this.email,
    userId: this.userId,
    exp: parseInt(expirationDate.getTime() / 1000, 10)
  }, 'secret');
}

User.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1 });
// making the above schema as model
module.exports = mongoose.model('User', User);

