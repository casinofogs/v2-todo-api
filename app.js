const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

// Permitting mongoose to use node default promise lib
mongoose.Promise = global.Promise;

// DB Connection
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://locahost:27017/todoapp-prod', { useMongoClient: true });
}

// calling routes
routes(app);


module.exports = app;
