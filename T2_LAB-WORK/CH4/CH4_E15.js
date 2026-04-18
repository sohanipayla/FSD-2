//develop a web application that simulates a college classroom entry system using middleware when a student access the classrout
// first point log that the student enter the student enter the campus 2) verify whether the student has cvalid id proof 3)
// if valid allow entry and display a welcome msg if not valid deny access

var express = require("express");
var app = express();
const logCampusEntry = (req, res, next) => {
    console.log("Step 1: Student entered the campus.");
    next();
};
const verifyID = (req, res, next) => {
    const hasID = req.query.id; 
    if (hasID === "true") {
        console.log("Step 2: Valid ID proof found.");
        next();
    } else {
        console.log("Step 2: Access Denied. No ID proof.");
        res.status(403).send("<h1>Access Denied!</h1><p>Please show a valid ID proof to enter the classroom.</p>");
    }
};
app.use(logCampusEntry,verifyID);
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Classroom!</h1><p>Entry Granted.</p>");
});
app.listen(5000, () => {
    console.log("running");
});
