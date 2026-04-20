const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
        <h2>Login Portal</h2>
        <form action="/login" method="POST">
            Username: <input type="text" name="user" required><br><br>
            Password: <input type="password" name="pass" required><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

const authenticate = (req, res, next) => {
    const { user, pass } = req.body;

    if (user === "admin" && pass === "1234") {
        next();
    } else {
        res.send("<h1>Invalid Credentials</h1>");
    }
};
app.post('/login', authenticate, (req, res) => {
    res.send("<h1>Login Successful</h1>");
});
app.listen(3012, () => {
    console.log("runing");
});
