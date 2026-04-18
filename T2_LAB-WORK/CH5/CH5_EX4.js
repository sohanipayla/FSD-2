// write express script to retrive data using post method and display data in json formate

express = require("express")
app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static(--__dirname,{index:"/4.html"}))
app.post('/showdata', function(req, res) {
    console.log(req.body.name+" "+req.body.age)
    res.send(req.body)
})
app.listen(3256)
