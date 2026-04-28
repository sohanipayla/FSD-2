const express = require("express");
const app = express();

let students = [
    { name: "Amit", height: 170 },
    { name: "Ravi", height: 180 },
    { name: "Neha", height: 160 }
];

// sort by name (descending)
students.sort((a, b) => {
    return b.name.localeCompare(a.name);
});

app.get("/", (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});