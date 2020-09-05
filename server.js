"use strict";

const express = require("express");
const routeUsers = require('./routes/routeUsers');
const routeReviews = require('./routes/routeReviews');
const routeshoppingcart = require('./routes/routeshoppingcart');
const routeShoppingItems = require('./routes/routeShoppingItems');
const bodyParser = require("body-parser");

var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeUsers.routeUsers(app);
routeReviews.routeReviews(app);
routeshoppingcart.routeshoppingcart(app);
routeShoppingItems.routeShoppingItems(app);


function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});