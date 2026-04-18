// build and express js app with a html form with username and submit button use post method on visiting '/' showthe form
// on submiting to login page /login if user name is admin display welcom admin else show please login with admin name 
// and a link bcak to the form

express = require("express")
app = express()
app.use(express.urlencoded({ extended: true }))
app.post('/login',(req, res)=>{
    if (req.body.uname == "admin") {
        res.send("<h1>Welcome"+req.body.name+"</h1>")
    } 
    else {
        res.send(`<h1 style="color:red>Please login with admin name</h1><br><a href='/'>Back to Form</a>`)
    }
})
app.listen(5225)