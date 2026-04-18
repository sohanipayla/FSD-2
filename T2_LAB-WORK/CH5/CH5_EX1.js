express=require("express")
app=express()
app.use(express.static(__dirname))
app.get("/process",function(req,res){
    fn=req.query.fname
    ln=req.query.lname
    console.log(req.query)
    res.send(`welcom ${fn} ${ln}`)
})
app.listen(3035)