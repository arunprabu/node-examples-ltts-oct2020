const fs = require('fs'); //importing file system module

let text = fs.readFileSync('sample.txt'); // reading file sync'ly
// so it is blocking i/o

// won't execute the following lines before the file read operation is over
console.log(text.toString());

//will be printed at last as the program runs line by line and char by char
console.log('Program Ended');



