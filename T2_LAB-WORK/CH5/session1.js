// write express js  using session to display how many times a user visited a website if user is visiting a website for
// the firs time then display welcome thank you for our website else display the count how many time user visited the 
// website for that particullar session
const express = require('express');
const app = express();
const session = require("express-session")
app.use(session(
    {
    secret: 'LJU123',
    saveUninitialized: true,
    resave: true
    }
)) 
app.get('/', (req, res) => {
    // If session.views doesn't exist, it's the first visit
    if (!req.session.page_views) {
        req.session.page_views = 1;
        res.send("<h2>Welcome! Thank you for visiting our website.</h2>");
    } else {
        // Increment count for returning users
        req.session.page_views++;
        res.send(`<h2>You have visited this website ${req.session.page_views} times in this session.</h2>`);
    }
});
app.listen(3015);