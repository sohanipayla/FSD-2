// Write express js script to perform tasks as asked below. 
// 1. Create one HTML file which contains two number type input 
// fields, one dropdown which contains options to select like (addition, 
// subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will 
// give a message “Please enter the valid number”. Also, user must 
// select any type of formula from the dropdown else give a message 
// “You have not selected any formula”. (Message will be displayed on 
// “/calc” page.) 
// 3. If one formula is selected and numbers are entered then Both 
// numbers should be stored in cookies which expires in 50 seconds. 
// Respective calculations will be performed on the page “/calc”.

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

// 1. Home Page: HTML Form 
app.get('/', (req, res) => {
    res.send(`
        <h2>Calculator Form</h2>
        <form action="/calc" method="GET">
            Number 1: <input type="number" name="num1"><br><br>
            Number 2: <input type="number" name="num2"><br><br>
            Operation: 
            <select name="formula">
                <option value="">--Select--</option>
                <option value="addition">Addition</option>
                <option value="subtraction">Subtraction</option>
                <option value="multiplication">Multiplication</option>
                <option value="division">Division</option>
            </select><br><br>
            <button type="submit">Calculate</button>
        </form>
    `);
});

// 2 & 3. Validation, Cookie Storage aur Calculation
app.get('/calc', (req, res) => {
    const { num1, num2, formula } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!num1 || !num2 || n1 <= 0 || n2 <= 0) {
        return res.send("Please enter the valid number");
    }
    if (!formula) {
        return res.send("You have not selected any formula");
    }
    res.cookie('num1', num1, { maxAge: 50000 });
    res.cookie('num2', num2, { maxAge: 50000 });

    let result = 0;
    if (formula === 'addition') result = n1 + n2;
    else if (formula === 'subtraction') result = n1 - n2;
    else if (formula === 'multiplication') result = n1 * n2;
    else if (formula === 'division') result = n1 / n2;

    res.send(`
        <h2>Calculation Result</h2>
        <p>Operation: ${formula}</p>
        <p>Result: ${result}</p>
        <p><i>Note: Numbers are stored in cookies for 50 seconds.</i></p>
        <a href="/">Go Back</a>
    `);
});

app.listen(3111);
