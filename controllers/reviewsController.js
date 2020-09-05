"use strict";

const Reviews = require('../models/Reviews');
const ReviewsDB = require('../models/ReviewsDB');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond) {
    reviewsDB.getAllReviews(function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

 function addReviews(request, respond) {

    var reviews = new Reviews(request.body.reviewID, request.body.userID, request.body.restID, request.body.subject, request.body.review, request.body.reviewDate);

    reviewsDB.addReviews(reviews, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

 function updateReviews(request, respond) {

    var reviews = new Reviews (request.params.reviewID, request.body.userID, request.body.restID, request.body.subject, request.body.review, request.body.reviewDate);
   
    reviewsDB.updateReviews(reviews, function(error,result) {
       
        if (error) {
            respond.json(error);
            console.log("ERROR");
        } else {
            respond.json(result);
            console.log("OK");
        }
    });
}


 function deleteReviews(request, respond) {

    reviewsDB.deleteReviews(request.params.reviewID, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);

        }
});
}

module.exports = { getAllReviews, addReviews, updateReviews, deleteReviews };