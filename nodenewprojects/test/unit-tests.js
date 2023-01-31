var expect  = require('chai').expect;
var request = require('request');
const nnnn = require('supertest');
const app = require('./../routes/routes')
/***Test File**/

it('home', function(done) {
    request('http://localhost:4200/' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('about', function(done) {
    request('http://localhost:4200/about', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});

it('reference', function(done) {
    request('http://localhost:4200/reference' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});

it('client', function(done) {
    request('http://localhost:4200/client' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});
it('contact', function(done) {
    request('http://localhost:4200/contact' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});

describe('get', function() {
    it('Add a comment', function(done) {
    // Use supertest to run assertions for our API
    nnnn(app)
    .post('/user/create')
    .send({
         name : "dharani",
         email : "dasda@gmak",
         address : "99/3dadm",
         phone : "0111111",
         Appoiment : "sasaas",
         feedback : "daaaaa"
         })
    .expect(201, done);
    done();
    });
});