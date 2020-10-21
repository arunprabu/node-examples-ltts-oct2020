const fs = require('fs');

let myText = 'My Demo File created in async!!!';

fs.writeFile('dummy.txt', myText, (err) =>{
  if(!err){
    console.log('File Writing Over');
  }else{
    console.log(err);
  }
});