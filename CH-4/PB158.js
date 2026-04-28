const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>The Pacific Ocean is the largest and deepest of the world ocean</h1>");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});