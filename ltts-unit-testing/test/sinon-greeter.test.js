const sinon = require('sinon');
const assert = require("assert");
const greeter = require("../greeter.js");

// //Save and run the test again. 
// // It will fail (unless it’s actually March 15, 2020, when you’re reading this.) 
// describe('testing greet fn', function(){
//   it("checks the greet function", function() {
//     assert.strictEqual(greeter.greet('Alice'), 'Hello, Alice! Today is Sunday, March 15, 2020.');
//   });
// });


// version 2: faking the timer as March 15, 2020 using sinon
describe('testing greet fn with sinon fake', function(){
  it("checks the greet function", function() {
    // faking the date  as if it is March 15, 2020. 
    var clock = sinon.useFakeTimers(new Date(2020, 2, 15));
    assert.strictEqual(greeter.greet('Alice'), 'Hello, Alice! Today is Sunday, March 15, 2020.');
    clock.restore();
  });
})