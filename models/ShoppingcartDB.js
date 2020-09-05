"use strict";

var db = require('../db-connection'); //reference of db-connection.js
var Shoppingcart = require('./Shoppingcart')

var Shoppingcart = new Shoppingcart();

class ShoppingcartDB {

    getAllShoppingcart(callback) {
        var sql = "SELECT * FROM recalicios.shoppingcart";

        db.query(sql, callback);
    }

    addShoppingcart(Shoppingcart, callback) {
        var sql = "INSERT INTO recalicios.shoppingcart (orderId_shoppingCart, username_shoppingCart, orderDateTime, payingMethod) VALUES (?, ?, ?, ?)";

        db.query(sql, [Shoppingcart.getorderId_shoppingCart(), Shoppingcart.getusername_shoppingCart(), Shoppingcart.getorderDateTime(), Shoppingcart.getpayingMethod()], callback);
    }

    updateShoppingcart(Shoppingcart, callback) {
        var sql = "UPDATE recalicios.shoppingcart SET username_shoppingCart = ?, orderDateTime = ?, payingMethod = ? WHERE orderId_shoppingCart = ?";

        return db.query(sql, [ Shoppingcart.getusername_shoppingCart(), Shoppingcart.getorderDateTime(), Shoppingcart.getpayingMethod(), Shoppingcart.getorderId_shoppingCart()], callback);
    }
 
    deleteShoppingcart(orderId_shoppingCart, callback) {
        var sql = "DELETE FROM recalicios.shoppingcart WHERE orderId_shoppingCart = ?";

        return db.query(sql, orderId_shoppingCart, callback); //SET review
    }

}

module.exports = ShoppingcartDB;