"use strict";

const userController = require('../controllers/userController');

function routeUsers(app) {

    // This URL will authenticate by comparing passwords    
    app.route('/login')
        .post(userController.authenticate);

    // This URL will authenticate by using the database
    app.route('/loginByDB')
        .post(userController.authenticateByDB);

    app.route('/User')
        .get(userController.getAllUsers)
        .post(userController.addUsers);

    app.route('/User/:userID')
       .put(userController.updateUsers) 
       .delete(userController.deleteUsers);
}

module.exports = { routeUsers };