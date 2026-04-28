const express = require("express");
const app = express();

// static files serve
app.use(express.static(__dirname, { index: 'PB156.html' }));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});