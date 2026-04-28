const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <form action="/login" method="GET">
            Username: <input type="text" name="username"><br><br>
            Password: <input type="password" name="password"><br><br>
            Message : <textarea name="message" rows="4" cols="40"></textarea><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

const countVowels = (req, res, next) => {
    const msg = req.query.message;
    const vowels = msg.match(/[aeiouAEIOU]/g);
    req.vowelCount = vowels ? vowels.length : 0;
    next();
};

app.get("/login", (req, res) => {
    res.send(`
        <h2>Submitted Details</h2>
        <p><b>Username :</b> ${req.query.username}</p>
        <p><b>Password :</b> ${req.query.password}</p>
        <p><b>Message  :</b> ${req.query.message}</p>
        <br>
        <a href="/message?message=${req.query.message}">Show Vowel</a>
    `);
});

app.get("/message", countVowels, (req, res) => {
    res.send(`
        <h2>Vowel Count</h2>
        <p><b>Message     :</b> ${req.query.message}</p>
        <p><b>Vowel Count :</b> ${req.vowelCount}</p>
        <br>
        <a href="/"><button>Go Back</button></a>
    `);
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));