"use strict";

var db = require('../db-connection'); //reference of db-connection.js

class UserDB {

    getLoginCredentials(username, callback) {
        var sql = "SELECT password FROM FOOD.User WHERE username = ?";

        db.query(sql, [username], callback);
    }

    authenticateByDB(username, password, callback) {
        var sql = "SELECT username FROM FOOD.User WHERE username = ? AND password = ?";

        db.query(sql, [username, password], callback);
    }

    getAllUsers(callback) {
        var sql = "SELECT * FROM FOOD.User";

        db.query(sql, callback);
    }

    //To add member/users into database
    addUsers(User, callback) {
        var sql = "INSERT INTO FOOD.User (userID, username, emailAddress, password, mobile, address, paymentID) VALUES (?, ?, ?, ?, ?, ?,?)";

        db.query(sql, [User.getUserID(), User.getUsername(), User.getEmailAddress(), User.getPassword(), User.getMobile(), User.getAddress(), User.getPaymentID()], callback);
    }

    //To update users informations
    updateUsers(User, callback) {
        var sql = "UPDATE FOOD.User SET userID = ?, username = ?, emailAddress = ?, password = ?, mobile = ?, address = ?, paymentID = ? WHERE userID = ?";

        return db.query(sql, [User.getUserID(), User.getUsername(), User.getEmailAddress(), User.getPassword(), User.getMobile(), User.getAddress(), User.getPaymentID(), User.getUserID()], callback);
    }

    //To delete users
    deleteUsers(userID, callback) {
        var sql = "DELETE FROM FOOD.User WHERE userID = ?";
        
        return db.query(sql, userID, callback);
    }

}
module.exports = UserDB;