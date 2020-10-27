var express = require('express');
var router = express.Router();

/* GET contacts page. -- Also handling query params */
router.get('/', function(req, res, next) {
  console.log(req.query); // query is an object -- we can capture query params on this url
  // rendering template
  console.log('Handling localhost:3000/contacts');
  res.render('contacts', { title: 'My Contacts!' });
});

// Understanding URL Params 
/* GET contacts/:contactId page */ 
router.get('/:contactId', function(req, res, next) { // working with URL Param - contactId
  // rendering template
  console.log(req.params); // req.params is an object
  console.log(req.params.contactId);
  console.log('Handling localhost:3000/contacts/:contactId');
  res.render('contacts-details', { id: req.params.contactId });
});

// Understanding URL Params 
/* GET contacts/:contactId/:name page */
router.get('/:contactId/:name', function(req, res, next) { // working with URL Param - contactId, name
  // rendering template
  console.log(req.params); // req.params is an object
  console.log(req.params.contactId);
  console.log(req.params.name);
  console.log('Handling localhost:3000/contacts/:contactId/:name');
  res.render('contacts-details', { id: req.params.contactId, name: req.params.name});
});


module.exports = router;
