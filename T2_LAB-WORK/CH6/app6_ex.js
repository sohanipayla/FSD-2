// write a express js application to perform following task 
// 1)create an ejs file named contact.ejs that display a heading contact form and contains a form with 
// (i) text input for name (ii) email for email (iii) submit button 
// 2) render a ejs file from the contact rout 
// 3)handle form submition using the post method on the submit rout 
// 4)after form submition display a message on the browser thank you this name we havee recive mail this mail

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// 2) Render a ejs file from the contact route
app.get('/contact', (req, res) => {
    res.render('contact');
});

// 3) Handle form submission using POST on submit route
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    
    // 4) Display thank you message with name and email
    res.send(`<h1>Thank you ${name}, we have received mail from ${email}</h1>`);
});

app.listen(3806)