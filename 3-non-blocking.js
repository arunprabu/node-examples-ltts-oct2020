const fs = require('fs');

// non-blocking I/O
// reading file async'ly 
// the cb would be executed once file read is over
fs.readFile('sample.txt', (err, data) => { 
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
});

// the following line would be executed first
console.log('Program Ended');
