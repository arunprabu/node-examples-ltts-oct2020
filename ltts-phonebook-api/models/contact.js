const mongoose = require('./mongo'); //importing connection config
const autoIncrement = require('mongoose-auto-increment');

// mongoose.Schema is a class - creating an obj for it 
var Contact = new mongoose.Schema({
  contactId: Number, 
  name: String,
  phone: Number,
  email: String,
  createdBy : String,
  createdOn : {type: Date, default: Date.now},
  updatedBy : String,
  updatedOn : {type: Date, default: Date.now}
});

Contact.plugin(autoIncrement.plugin, { model: 'Contact', field: 'contactId', startAt: 1 });
// making the above schema as model
module.exports = mongoose.model('Contact', Contact);
