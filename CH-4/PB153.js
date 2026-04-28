var express = require("express");
var app = express();
var p = require("path");

// 1. Static middleware 
app.use(express.static(__dirname, { index: 'MID23.html' }));

// 2. Post data read--> extended true 
app.use(express.urlencoded({ extended: true }));

// 1st Middleware: Welcome message 
app.post("/login", (req, res, next) => {
    res.set("content-type", "text/html");
    res.write("<center><h1>Welcome " + req.body.name + "</h1>");
    res.write("<h2>Your email id is " + req.body.email + "</h2>");
    next(); 
});

// 2nd Middleware: Subscription check 
app.post("/login", (req, res) => {
    if (req.body.newsletter == "on") {
        res.write("<h3>Thank you for your subscription</h3><a href='/'>Logout</a>");
    } else {
        res.write("<h3>You can subscribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
    }
    res.send();
});
// 3. Subscription Page
app.get("/subscribe", (req, res) => {
    res.set("content-type", "text/html");
    res.write("<center><h3>Thank you for your subscription</h3><a href='/'>Logout</a></center>");
    res.send();
});
app.listen(5001);