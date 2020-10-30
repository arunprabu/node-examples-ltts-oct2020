// test suite
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const request = require('supertest'); // an alternative to chai-http

// setup chai-http plugin
chai.use(chaiHttp);

// group of test cases - test suite 
describe('Movies REST API', () => {

  // test case 
  it('should return status 200', (done) => { // mocha provides done
    chai.request('http://localhost:3000/movies')
      .get('/')
      .then((res) => {
        // test with api's such as expect, assert, should 
        expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        throw (err);
      });
  });

  it('should return movies in json format', (done) => {
    chai.request('http://localhost:3000/movies')
      .get('/')
      .then((res) => {
        // test with api's such as expect, assert, should 
        expect(res).to.have.json;
        done();
      })
      .catch((err) => {
        throw (err);
      });
  })

});


// Demo using Supertest
// Refer this tutorial: 
// https://hackernoon.com/api-testing-using-supertest-1f830ce838f1
const app = require('../app');
//==================== user API test ====================

/**
* Testing get all user endpoint
*/
describe('GET /users', function () {
  it('responds with json containing a list of all users', function (done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

