"use strict";

var db = require('../db-connection'); //reference of db-connection.js

class ReviewsDB {

    getAllReviews(callback) {
        var sql = "SELECT * FROM FOOD.Reviews";

        db.query(sql, callback);
    }

    //To add member/reviews into database
    addReviews(Reviews, callback) {
        var sql = "INSERT INTO FOOD.Reviews (reviewID, userID, restID, subject, review, reviewDate) VALUES (?, ?, ?, ?, ?, ?)";

        db.query(sql, [Reviews.getReviewID(), Reviews.getUserID(), Reviews.getRestID(), Reviews.getSubject(), Reviews.getReview(), Reviews.getReviewDate()], callback);
    }

   //To update reviews informations
    updateReviews(Reviews, callback) {
        var sql = "UPDATE FOOD.Reviews SET reviewID = ?, userID = ?, restID = ?, subject = ?, review = ?, reviewDate = ? WHERE reviewID = ?";

        return db.query(sql, [Reviews.getReviewID(), Reviews.getUserID(), Reviews.getRestID(), Reviews.getSubject(), Reviews.getReview(), Reviews.getReviewDate(), Reviews.getReviewID()], callback);
    }

    //To delete reviews
    deleteReviews(reviewID, callback) {
        var sql = "DELETE FROM FOOD.Reviews WHERE reviewID = ?";
        
        return db.query(sql, reviewID, callback);
    }

}
module.exports = ReviewsDB;