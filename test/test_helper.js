const mongoose = require('mongoose');

before(function (done) {
    mongoose.connect('mongodb://localhost:27017/todoapp-test', { useMongoClient: true });
    mongoose.connection
        .once('open', function () { done(); })
        .on('error', function (err) { console.error('DB connection Error: ', err); });
});

beforeEach(function (done) {
    // Drop collection before each test
    done();
});