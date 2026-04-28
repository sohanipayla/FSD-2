const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h2>User Form</h2>
        <form action="/result" method="GET">
            Name: <input type="text" name="name"><br><br>
            Age: <input type="text" name="age"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.get("/result", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`<h1>Hello ${name}, your age is ${age}</h1>`);
});

app.listen(3000);