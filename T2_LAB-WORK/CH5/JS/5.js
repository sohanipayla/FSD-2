const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../HTML"), { index: "5.html" }));
app.use(express.static(path.join(__dirname, "../css")));
app.use(express.static(path.join(__dirname, "../Image")));

app.listen(3025);
