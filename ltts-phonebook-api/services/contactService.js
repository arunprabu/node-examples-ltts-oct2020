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
exports.getContactById = (contactId, callback ) => {

  const contact = {
    id: contactId,
    name: 'Arun',
    phone: 23435,
    email: 'a@b.com',
    createdOn: 3252345,
    updatedOn: 23423434
  };

  callback(null, contact);

}

// updateContact 
exports.updateContact = (contactId, contactData, callback) => {
  console.log(contactId);
  console.log(contactData);

  callback(null, { status: 'Updated Successfully!'});
}

// deleteContact 
exports.deleteContact = ( contactId, callback) => {
  console.log(contactId);

  callback(null, { status: 'Deleted Successfully!'});
}

// filter -- find active contacts 
// search
// bulk update
// bulk delete
// soft delete 
// hard delete 
// total count


