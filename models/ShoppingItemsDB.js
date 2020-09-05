"use strict";

var db = require('../db-connection'); //reference of db-connection.js

class ShoppingItemsDB {

    getShoppingItems(callback) {
        var sql = "SELECT * FROM FOOD.shoppingitems";

        db.query(sql, callback);
    }

    addShoppingItems(shoppingitems, callback) {
        var sql = "INSERT INTO FOOD.shoppingitems (itemID, foodID, price) VALUES (?, ?, ?)";

        db.query(sql, [shoppingitems.getItemID(), shoppingitems.getFoodID(), shoppingitems.getprice()], callback);
    }

    updateShoppingItems(shoppingitems, callback) {
        var sql = "UPDATE FOOD.shoppingitems SET itemID = ?, foodID = ?, price = ? WHERE itemID = ?";

        return db.query (sql, [shoppingitems.getItemID(), shoppingitems.getFoodID(), shoppingitems.getprice(),shoppingitems.getItemID()], callback);

    }

    deleteShoppingItems(orderID, callback) {
        var sql = "DELETE FROM FOOD.shoppingitems WHERE itemID = ?";

        return db.query(sql, itemID, callback);



    }
} 
module.exports = ShoppingItemsDB;