"use strict";

const shoppingcartController = require('../controllers/shoppingcartController');

function routeshoppingcart(app)
{
    app.route('/Shoppingcart')
        .get(shoppingcartController.getAllShoppingcart)
        .post(shoppingcartController.addShoppingcart);

    app.route('/Shoppingcart/:orderId_shoppingCart')
        .put(shoppingcartController.updateShoppingcart)
        .delete(shoppingcartController.deleteShoppingcart);
}

module.exports = { routeshoppingcart }; 
