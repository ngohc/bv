"use strict";

class Reviews {
    constructor(reviewID, userID, restID, subject, review, reviewDate) {
        this.reviewID = reviewID;
        this.userID = userID;
        this.restID = restID;
        this.subject = subject;
        this.review = review;
        this.reviewDate = reviewDate;
    }

    getReviewID() {
        return this.reviewID;
    }

    getUserID() {
        return this.userID;
    }

    getRestID() {
        return this.restID;
    }

    getSubject() {
        return this.subject;
    }

    getReview() {
        return this.review;
    }

    getReviewDate() {
        return this.reviewDate;
    }

    setReviewID(reviewID) {
        this.reviewID = reviewID;
    }

    setUserID(userID) {
        this.userID = userID;
    }

    setRestID(restID) {
        this.restID = restID;
    }

    setSubject(subject) {
        this.subject = subject;
    }

    setReview(review) {
        this.review = review;
    }

    setReviewDate(reviewDate) {
        this.reviewDate = reviewDate;
    }

}

module.exports = Reviews;