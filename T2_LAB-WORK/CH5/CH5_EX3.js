const express = require("express");
const app = express();
app.use(express.static(__dirname,{ index:'3.html'}));
app.get("/calc", function(req, res) {
    n1 = parseInt(req.query.num1);
    n2 = parseInt(req.query.num2);
    formula = req.query.formula;
if (n1 <= 0 || n2 <= 0) {
    return res.send("Please enter the valid number");
}
if (formula === "none") {
    return res.send("You have not selected any formula");
}
let result;
if (formula === "add") result = n1 + n2;
else if (formula === "sub") result = n1 - n2;
else if (formula === "mul") result = n1 * n2;
else if (formula === "div") result = n1 / n2;

res.send(`The result of ${formula} is: ${result}`);
});

app.listen(3241);
