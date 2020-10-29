// version 1: Refer greeter.js in root level
// we are working with date.
// const assert = require("assert");
// const greeter = require("../sinon-examples/greeter.js");
 
// //Save and run the test again. 
// // It will fail (unless it’s actually March 15, 2020, when you’re reading this.) 

// describe("testing the greeter", function() {
//   it("checks the greet function", function() {
//     assert.strictEqual(greeter.greet('Alice'), 'Hello, Alice! Today is Sunday, March 15, 2020.');
//   });
// });


// version 2: faking the timer as March 12, 2020
// then -- npm run test
const assert = require("assert");
const greeter = require("../sinon-examples/greeter.js");
const sinon = require("sinon");

describe("testing the greeter", function() {
  it("checks the greet function", function() {
    // faking the date as March 15, 2020
    var clock = sinon.useFakeTimers(new Date(2020, 2, 15));
    assert.strictEqual(greeter.greet('Alice'), 'Hello, Alice! Today is Sunday, March 15, 2020');
    clock.restore();
  });
});


// for more -- refer https://sinonjs.org