"use strict";

class shoppingitems {
    constructor(itemID, foodID, price) {
        this.itemID = itemID;
        this.foodID = foodID;
        this.price = price;
    }

    getItemID() {
        return this.itemID;
    }

    getFoodID() {
        return this.foodID;
    }

    getprice() {
        return this.price;
    }

    setItemID(itemID) {
        this.itemID = itemID;
    }

    setFoodID(foodID) {
        this.foodID = foodID;
    }

    setprice(price) {
        this.price = price;
    }

}
module.exports = shoppingitems;