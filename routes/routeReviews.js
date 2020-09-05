"use strict";

const reviewsController = require('../controllers/reviewsController');

function routeReviews(app) {
    app.route('/Reviews')
        .get(reviewsController.getAllReviews)
        .post(reviewsController.addReviews);

    app.route('/Reviews/:reviewID')
       .put(reviewsController.updateReviews)
       .delete(reviewsController.deleteReviews); 
}

module.exports = { routeReviews };