
// service methods

// createContact
exports.createContact = (req, callback) => {
  console.log(req.body);
  let status = {
    id: 3,
    name: 'Smith',
    phone: 23435,
    email: 'a@b.com',
    info: 'Created Successfully!'
  };

  callback( null, status );
}

// getContacts
exports.getContacts = (callback) => {
  const myContacts = [
    {
      id: 1,
      name: 'Arun',
      phone: 23435
    },
    {
      id: 2,
      name: 'John',
      phone: 2423
    }
  ];

  callback(null, myContacts);
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


