const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
        <h2>Login Form</h2>
        <form action="/check" method="POST">
            Username: <input type="text" name="uname" required><br><br>
            Password: <input type="password" name="pwd" required><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});
const checkUser = (req, res, next) => {
    if (req.body.uname === "admin") {
        next();
    } else {
        res.send("<h2 style='color:red;'>Warning: Incorrect User!</h2>");
    }
};
app.post('/check', checkUser, (req, res) => {
    res.send("<h1>Welcome... admin</h1>");
});
app.listen(3000, () => {
    console.log("running");
});