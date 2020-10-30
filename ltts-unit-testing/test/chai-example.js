// chai provides api's such as expect, should, assert.
const { assert, expect } = require('chai'); 
const should = require('chai').should();

const scores = [10, 40, 23, 54, 89, 242];
const age = 10;
const exampleText = 'Random text';

// what feature / unit you are testing
// group of related test cases  
describe('score', function(){

  // test cases with assert
  it('is an array', function(){
    assert.isArray(scores, 'Score is not an array');
  });

  it('includes 40', function(){
    assert.include(scores, 40);
  });
  
  it('has length of 6', function(){
    assert.lengthOf(scores, 6, 'Array length should be 6');
  });

  // test cases with expect api 
  it('is an array and includes 242', function(){
    expect(scores).to.be.an('array').that.includes(242);
  });

  it('is with length of 6', function(){
    expect(scores).to.have.lengthOf(6);
  });

  // test cases with should api
  it('should have length of 6', function(){
    scores.should.have.lengthOf(6);
  });
});


describe('age', function(){
  it('should be a number', function(){
    age.should.be.a('number');
  });
});

describe('exampleText', function(){
  it('is a string and includes Random', function(){
    exampleText.should.be.a('string').that.includes('Random');
  });
});

// For more refer: 
// https://mochajs.org/
// https://www.chaijs.com/
