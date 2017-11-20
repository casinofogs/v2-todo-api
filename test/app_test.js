const assert = require('assert');
const request = require('supertest');
const app = require('./../app');

describe('The express app', function () {
    it('Handels a get request', function (done) {
        request(app)
            .get('/') //Put an get url like '/api'
            .end(function (err, response) {
                assert(response.body.hi === 'there');
                done();
            })
    });
});