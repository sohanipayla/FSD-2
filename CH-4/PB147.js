const express = require("express");
const app = express();

app.use(express.static(__dirname, { index: 'index.html' }));
app.listen(3030, () => {
    console.log("Server running on http://localhost:3030");
});