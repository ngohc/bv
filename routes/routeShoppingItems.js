"use strict";

const shoppingitemsController = require('../controllers/shoppingitemsController');

function routeShoppingItems(app) {
    app.route('/shoppingitems')
        .get(shoppingitemsController.getShoppingItems)
        .post(shoppingitemsController.addShoppingItems);

    app.route('/shoppingitems/:itemID')
        .put(shoppingitemsController.updateShoppingItems)
        .delete(shoppingitemsController.deleteShoppingItems);
}

module.exports = { routeShoppingItems }; 
    