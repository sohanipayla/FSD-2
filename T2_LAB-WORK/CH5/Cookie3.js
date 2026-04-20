// PB 200 : You have been assigned to develop a user feedback form for a website
// using Express.js and cookies. Implement the following requirements:
//  Process a form with the following fields: Name, Email , Message , Rating
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user
// submits the form, store their feedback information (name, email, message,
// and rating) in a cookie named "feedback" that expires in 10 seconds.
// Display a confirmation message to the user after successfully submitting the
// form & Create a link to display the feedback details stored in the "feedback"
// cookie. When the user click to the link, retrieve the feedback information
// from the cookie and display it on the page also include a link on the
// feedback details page to Logout. When the user clicks the link, user
// redirected to home page. Make app.js file use get method in express js. No
// need to write html file having form elements.
// After 10 seconds it will give message "no feedback available" message to user
const express = require("express");
const cp = require("cookie-parser");
const app = express();

app.use(cp());

app.get("/", (req, res) => {
    res.send(`
        <h2>User Feedback Form</h2>
        <form action="/set-feedback" method="GET">
            Name: <input type="text" name="name" required><br><br>
            Email: <input type="email" name="email" required><br><br>
            Message: <textarea name="message" required></textarea><br><br>
            Rating: 
            <input type="radio" name="rating" value="Bad"> Bad
            <input type="radio" name="rating" value="Average"> Average
            <input type="radio" name="rating" value="Good"> Good
            <input type="radio" name="rating" value="Very Good"> Very Good
            <input type="radio" name="rating" value="Excellent"> Excellent<br><br>
            <button type="submit">Submit Feedback</button>
        </form>
    `);
});

app.get("/set-feedback", (req, res) => {
    const feedbackData = {
        name: req.query.name,
        email: req.query.email,
        message: req.query.message,
        rating: req.query.rating
    };

    res.cookie("feedback", JSON.stringify(feedbackData), { maxAge: 10000 });
    res.send(`
        <h3>Feedback submitted successfully!</h3>
        <p><a href="/view-feedback">Click here to view feedback details</a></p>
    `);
});

app.get("/view-feedback", (req, res) => {
    if (req.cookies.feedback) {
        const feedback = JSON.parse(req.cookies.feedback);
        res.send(`
            <h2>Feedback Details:</h2>
            <p><strong>Name:</strong> ${feedback.name}</p>
            <p><strong>Email:</strong> ${feedback.email}</p>
            <p><strong>Message:</strong> ${feedback.message}</p>
            <p><strong>Rating:</strong> ${feedback.rating}</p>
            <br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send("<h3>No feedback available</h3> <p><a href='/'>Go Back</a></p>");
    }
});
app.get("/logout", (req, res) => {
    res.clearCookie("feedback");
    res.redirect("/");
});

app.listen(3012);