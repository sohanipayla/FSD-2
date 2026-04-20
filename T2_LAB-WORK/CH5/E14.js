var express = require("express");
var app = express();
const addName = (req, res, next) => {
    req.name = 'Siya';
    console.log("Name Added");
    next();
};
const addCollege = (req, res, next) => {
    req.college = "LJU";
    console.log("College Added");
    next();
};
const addMarks = (req, res, next) => {
    req.total = 50 + 40;
    console.log("Marks added");
    next();
};
app.get('/', (req, res) => {
    res.send("Welcome! Click here: <a href='/student'>Go to Student Page</a>");
});
app.get('/student', addName, addCollege, addMarks, (req, res) => {
    res.send(`
        <h3>Student Details</h3>
        <p><b>Name:</b> ${req.name}</p>
        <p><b>College:</b> ${req.college}</p>
        <p><b>Marks:</b> ${req.total}</p>
    `);
});
app.listen(6528, () => {
    console.log("running");
});
