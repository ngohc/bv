"use strict";

const Shoppingcart = require('../models/Shoppingcart');
const ShoppingcartDB = require('../models/ShoppingcartDB');

var shoppingcartDB = new ShoppingcartDB();

function getAllShoppingcart(request, respond) {
    shoppingcartDB.getAllShoppingcart(function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function addShoppingcart(request, respond) {
    var shoppingcart = new Shoppingcart(request.body.orderId_shoppingCart, request.body.username_shoppingCart, request.body.orderDateTime, request.body.payingMethod);

    shoppingcartDB.addShoppingcart(shoppingcart, function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function updateShoppingcart(request, respond) {
    var now = new Date();
    var shoppingcart = new Shoppingcart(request.params.orderId_shoppingCart, request.body.username_shoppingCart, request.body.orderDateTime, request.body.payingMethod, now.toString());

    shoppingcartDB.updateShoppingcart(shoppingcart, function(error, result) {

        if (error) {
            respond.json(error);
            console.log("ERROR");
        } else {
            respond.json(result);
            console.log("OK");
        }


    });
}

function deleteShoppingcart(request, respond) {
    shoppingcartDB.deleteShoppingcart(request.params.orderId_shoppingCart, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
} 


module.exports = { getAllShoppingcart, addShoppingcart, updateShoppingcart , deleteShoppingcart};