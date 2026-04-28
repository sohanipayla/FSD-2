const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h2>Student Form</h2>
        <form action="/submit" method="POST">
            Name: <input type="text" name="name"><br><br>
            Mobile: <input type="text" name="mobile"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// POST route
app.post("/submit", (req, res) => {
    console.log("Name:", req.body.name);
    console.log("Mobile:", req.body.mobile);

    res.send("<h1>Data Submitted</h1>");
});

app.listen(3000);