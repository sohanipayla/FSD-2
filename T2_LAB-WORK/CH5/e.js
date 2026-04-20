express = require("express")
app = express()

app.use(express.static(__dirname, {index: '3.html'}))

app.get('/calc', function(req, res){
    res.set("content-type", "text/html")
    
    // Number() use karein taaki empty hone par NaN na aaye
    a = Number(req.query.n1)
    b = Number(req.query.n2)
    f = req.query.f
    ans = 0

    if (a <= 0 || b <= 0) {
        res.send("please enter the valide number")
    } 
    else if (f == "none") {
        res.send("you have not selected any formula")
    } 
    else {
        // Yahan check karein ki 'f' ki values HTML se match ho rahi hain
        if (f == "add") ans = a + b
        else if (f == "sub") ans = a - b
        else if (f == "mul") ans = a * b
        else if (f == "div") ans = a / b
        
        res.send("Result is: " + ans)
    }
})

app.listen(3241, () => console.log("Server running on 3241"))
