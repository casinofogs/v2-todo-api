const todoController = require('./../controllers/todoController');

module.exports = function (app) {
    app.get('/', todoController.testRequest);
}