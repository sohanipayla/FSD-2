const express = require("express");
const app = express();

let data = [
    { name: "Amit", score: 80 },
    { name: "Ravi", score: 90 },
    { name: "Neha", score: 70 }
];

// sort by name (descending)
data.sort((a, b) => {
    return b.name.localeCompare(a.name);
});

app.get("/", (req, res) => {
    res.json(data);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});