// Write an express.js script to define 2 pages. 1st page has username 
// and password. Store this username to cookie on 2nd page. Cookie 
// must stay live for 1 day.

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

// 1st Page: Login Form
app.get('/', (req, res) => {
    res.send(`
        <h2>Page 1: Login</h2>
        <form action="/set-cookie" method="GET">
            Username: <input type="text" name="username" required><br><br>
            Password: <input type="password" name="password" required><br><br>
            <button type="submit">Go to Page 2</button>
        </form>
    `);
});

// 2nd Page: Store username in cookie for 1 day
app.get('/set-cookie', (req, res) => {
    const user = req.query.username;

    if (user) {
        // 1 day = 24 * 60 * 60 * 1000 milliseconds = 86,400,000
        res.cookie('user_name', user, { maxAge: 86400000 });

        res.send(`
            <h2>Page 2: Cookie Stored!</h2>
            <p>Username <b>${user}</b> has been saved to a cookie for 1 day.</p>
            <a href="/check-cookie">Check if cookie exists</a>
        `);
    } else {
        res.send('Please provide a username <a href="/">here</a>.');
    }
});

// Optional: Route to verify the cookie
app.get('/check-cookie', (req, res) => {
    const savedUser = req.cookies.user_name;
    if (savedUser) {
        res.send(`Found cookie! Username is: ${savedUser}`);
    } else {
        res.send('No cookie found.');
    }
});
app.listen(3000);
