// develope  a web application using express and ejs to accept marks of T1,T2,T3 and T4 each out off 25 through a form 
// using post method after submition display all entered marks in a tabular formate along with the total marks and determine 
// the result if the total is 35 or more display pass in green colour other fail in red colour 

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('seven');
});

app.post('/result', (req, res) => {
    const t1 = parseInt(req.body.t1);
    const t2 = parseInt(req.body.t2);
    const t3 = parseInt(req.body.t3);
    const t4 = parseInt(req.body.t4);
    
    const total = t1 + t2 + t3 + t4;

    res.render('seven_result', { t1, t2, t3, t4, total });
});

app.listen(3808);
