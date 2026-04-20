const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "frontend"), { index: "3.html" }));
app.use(express.static(path.join(__dirname, "backend")));
app.listen(5214)
