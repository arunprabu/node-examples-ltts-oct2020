const express = require('express');
const router = express.Router();

// connecting to service
const contactService = require('../../services/contactService');

/* POST contacts */
router.post('/', (req, res, next) => { // dealing with req body 
  console.log(req.body);

  contactService.createContact(req, function(err, data){
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });
  
});

/* GET contacts listing. */
router.get('/', (req, res, next) => {
  
  contactService.getContacts( (err, data)=>{
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });
  
});

/* GET contacts/1 . */
router.get('/:id', (req, res, next) => { // URL Param is: id
  
  contactService.getContactById(req.params.id, (err, data)=>{
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });

});

/* PUT contacts/1 */
router.put('/:id', (req, res, next) => {
  console.log(req.params.id); //  working with url param
  console.log(req.body); // req body -- will work with this later

  contactService.updateContact(req.params.id, req.body, (err, data) => {
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });
});

/* DELETE contacts/1 */
router.delete('/:id', (req, res, next) => {
  console.log(req.params.id); // working with url params 

  contactService.deleteContact(req.params.id, (err, data) => {
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  })
});

module.exports = router;
