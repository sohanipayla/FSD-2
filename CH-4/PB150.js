const express = require("express");
const app = express();

app.use(express.static(__dirname, { index: 'PB150.html' }));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});