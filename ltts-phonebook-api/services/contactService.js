// 1. connect to model
const Contact = require('../models/contact');
// service methods

// createContact
exports.createContact = (req, callback) => {
  console.log(req.body);
  // 2. construct query
  let contactDao = new Contact(req.body);
  // 3. exec query
  contactDao.save( (err, savedContact ) =>{ // 4. get the status from db 
    if (!err) {
      console.log(`Contact registered successfully with contactId:${savedContact.contactId}`);
    }
    //  5. Channelise it to the router
    callback(err, savedContact);
  });
}

// getContacts
exports.getContacts = (callback) => {
  
  // 1. construct and exec query 
  Contact.find( (err, contactsList) => {
    if (!err) {
      console.log(`Contacts Loaded successfully :${contactsList.length}`);
    }
    // 2. get the data from db and send it to the router
    callback(err, contactsList);
  });
}

// getContactById
exports.getContactById = (_contactId, callback ) => {

  Contact.findOne( {contactId: _contactId } , ( err, contact ) => {
    if(!err){
      console.log(`Contact with Id ${contact.contactId} Loaded Successfully`);
    }

    callback(err, contact);
  });
}

// updateContact 
exports.updateContact = (_contactId, contactData, callback) => {
  console.log(_contactId);
  console.log(contactData);

  // 1. construct query and exec 
  Contact.updateOne( { contactId: _contactId }, contactData, (err, status) => {

    let msg = 'Not Updated! Some Error Occured!'; 
    if(!err){
      console.log(status);
      if(status.n = 1 && status.ok == 1){
        msg = 'Updated Successfully!';
      }
    }
    // 2. get the data and send it back to route
    callback(err, status);
  });
}

// deleteContact 
exports.deleteContact = ( _contactId, callback) => {
  
  Contact.deleteOne({ contactId: _contactId }, (err, status ) => {
    let msg = 'Not Deleted! Some Error Occured!'; 
    if(!err){
      console.log(status);
      if(status.n = 1 && status.ok == 1){
        msg = 'Deleted Successfully!';
      }
    }
    // 2. get the data and send it back to route
    callback(err, msg);
  });
}

// filter -- find active contacts 
// search
// bulk update
// bulk delete
// soft delete 
// hard delete 
// total count


