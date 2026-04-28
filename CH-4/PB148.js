const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h2>User Form</h2>
        <form action="/submit" method="POST">
            Name: <input type="text" name="name"><br><br>
            Email: <input type="email" name="email"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
    console.log("Submitted Data:", req.body); 
    res.send("<h1>Data Received</h1>");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});