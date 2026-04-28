const express = require('express');
const app = express();

// Home Route
app.get('/home', (req, res) => {
    res.send("<h1>Welcome to my Home Page</h1>");
});

// About Route
app.get('/about', (req, res) => {
    res.send("<h1>Welcome to my About Page</h1>");
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send("<h1>Welcome to my Contact Page</h1>");
});

// Temp Route
app.get('/temp', (req, res) => {
    res.send("<h1>Welcome to my Temp Page</h1>");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});