const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/result', (req, res) => {
    const name = req.body.studentName;
    const marks = parseInt(req.body.studentMarks);
    
    const status = marks >= 9 ? "PASS" : "FAIL";
    const color = marks >= 9 ? "green" : "red";

    res.render('result', { name, marks, status, color });
});

app.listen(3807);
