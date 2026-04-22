// Write a script to meet following requirement using ExpressJS.
// 1. Create index.html which contains login page having fields like 
// Username, Password & Gender. Open it on localhost.
// 2. After clicking on submit button, it should jump to savesession 
// page. store username & gender in session.
// 3. After saving session, redirect to fetchsession page and read session 
// values. Put a logout link button here.
// 4. After clicking logout button, it jumps to deletesession page.
// 5. Destroy the session on this page & redirect to index.html page.

const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'my-secret-key', 
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(__dirname,{index:'session2.html'}))

app.post('/savesession', (req, res) => {
    req.session.username = req.body.username;
    req.session.gender = req.body.gender;
    
    res.redirect('/fetchsession');
});

app.get('/fetchsession', (req, res) => {

    res.send(`
        <h2>Session Data Fetched</h2>
        <p><strong>Username:</strong> ${req.session.username}</p>
        <p><strong>Gender:</strong> ${req.session.gender}</p>
        <br>
        <a href="/deletesession"><button>Logout</button></a>
    `);
});

app.get('/deletesession', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3099);
