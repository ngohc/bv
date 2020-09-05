"use strict";

class User {
    constructor(userID, username, emailAddress, password, mobile, address, paymentID) {
        this.userID = userID;
        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;
        this.mobile = mobile;
        this.address = address;
        this.paymentID = paymentID;
    }

    getUserID() {
        return this.userID;
    }

    getUsername() {
        return this.username;
    }

    getEmailAddress() {
        return this.emailAddress;
    }

    getPassword() {
        return this.password;
    }

    getMobile() {
        return this.mobile;
    }

    getAddress() {
        return this.address;
    }

    getPaymentID() {
        return this.paymentID;
    }

    setUserID(userID) {
        this.userID = userID;
    }

    setUsername(username) {
        this.username = username;
    }

    setEmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }

    setPassword(password) {
        this.password = password;
    }

    setMobile(mobile) {
        this.mobile = mobile;
    }

    setAddress(address) {
        this.address = address;
    }

    setPaymentID(paymentID) {
        this.paymentID = paymentID;
    }
}

module.exports = User;