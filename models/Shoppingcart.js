"use strict";

class Shoppingcart {
    constructor(orderId_shoppingCart, username_shoppingCart, orderDateTime, payingMethod) {
        this.orderId_shoppingCart = orderId_shoppingCart;
        this.username_shoppingCart = username_shoppingCart;
        this.orderDateTime = orderDateTime;
        this.payingMethod = payingMethod;
    }

    getorderId_shoppingCart() {
        return this.orderId_shoppingCart;
    }

    getusername_shoppingCart() {
        return this.username_shoppingCart;
    }

    getorderDateTime() {
        return this.orderDateTime;
    }

    getpayingMethod() {
        return this.payingMethod;
    }

}

module.exports = Shoppingcart;