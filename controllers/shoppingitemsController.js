"use strict";

const ShoppingItems = require('../models/ShoppingItems');
const ShoppingItemsDB = require('../models/ShoppingItemsDB');

var shoppingItemsDB = new ShoppingItemsDB();

function getShoppingItems(request, respond) {
    shoppingItemsDB.getShoppingItems(function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function addShoppingItems(request, respond) {
    var shoppingItems = new ShoppingItems(request.body.itemID, request.body.foodID, request.body.price);

    shoppingItemsDB.addShoppingItems(shoppingItems, function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}


function updateShoppingItems(request, respond) {
    var now = new Date();
    var shoppingItems = new ShoppingItems(request.params.itemID, request.body.foodID, request.body.price, now.toString());

    shoppingItemsDB.updateShoppingItems(shoppingItems, function(error, result) {

        if (error) {
            respond.json(error);
            console.log("ERROR");
        } else {
            respond.json(result);
            console.log("OK");
        }

    });
} 

function deleteShoppingItems(request, respond) {

    shoppingItemsDB.deleteShoppingItems(request.params.itemID, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}


module.exports = { getShoppingItems, addShoppingItems,updateShoppingItems, deleteShoppingItems };
