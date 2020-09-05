"use strict";

const User = require('../models/User');
const UserDB = require('../models/UserDB');

var userDB = new UserDB();

// This function authenticates by comparing the input password and password 
// from the database.
function authenticate(request, respond) {
    var input_username = request.body.username; // username from user input
    var input_password = request.body.password; // password from user input
    var msg = "";

    // Call the getLoginCredentials function from UserDB
    userDB.getLoginCredentials(input_username, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If user can be found, result has one record
            if (result.length > 0) {
                if (input_password == result[0].password) {
                    msg = "1"; //Success
                    console.log(msg);
                } else { 
                    msg = "Login fail!";
                    console.log(msg);
                }
            } else { // If user not found, result has no record
                msg = "User not found!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

// This function authenticates by using the database to look for 
// the requested username and password.
function authenticateByDB(request, respond) {
    var input_username = request.body.username;
    var input_password = request.body.password;
    var msg = "";

    userDB.authenticateByDB(request.body.username, request.body.password, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If the record can be found, the result will have one item
            // else it will have no item.
            if (result.length > 0) {
                msg = "Success!";
            } else {
                msg = "Fail!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}


function getAllUsers(request, respond) {
    userDB.getAllUsers(function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function addUsers(request, respond) {

    var user = new User(request.body.userID, request.body.username, request.body.emailAddress, request.body.password, request.body.mobile, request.body.address, request.body.paymentID);

    userDB.addUsers(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function updateUsers(request, respond) {

    var user = new User (request.params.userID, request.body.username, request.body.emailAddress, request.body.password, request.body.mobile, request.body.address, request.body.paymentID);
   
    userDB.updateUsers(user, function(error,result) {
       
        if (error) {
            respond.json(error);
            console.log("ERROR");
        } else {
            respond.json(result);
            console.log("OK");
        }
    });
}


function deleteUsers(request, respond) {

    userDB.deleteUsers(request.params.userID, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);

        }
});
}

// This function creates a cutom message to be sent back 
// to the client. 
function prepareMessage(msg) {
    var obj = { "message": msg };

    return obj;
} 

module.exports = { authenticate, authenticateByDB, getAllUsers, addUsers, updateUsers, deleteUsers };