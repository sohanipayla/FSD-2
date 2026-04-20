// write an express js script to set cookies of submited values and perform following task 
// 1) create and html file which containts a form with field first name , lastname,password and submit button
// 2) once form submited store all this values to the respected cookies on nexy page (/next)
// 3) then redirect user to admin page(/admin) and clear cookie set for the lastname display remaing set of the cookie 
// on this page using post method

var express = require("express")
var app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname, {index: "c2.html"}))

cp = require("cookie-parser")
app.use(cp())

app.post("/next", (req, res) => {
    res.cookie("firstname", req.body.fname)
    res.cookie("lastname", req.body.lname)
    res.cookie("password", req.body.password)
    res.redirect("/admin")
})

app.get("/admin", (req, res) => {
    res.clearCookie("lname")
    res.send(req.cookies.fname + "<br>" + req.cookies.password + "</br>" + req.cookies.lname)
})

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})