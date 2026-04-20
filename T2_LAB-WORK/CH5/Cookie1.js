express=require("express")
app=express()
cp=require("cookie-parser")
app.use(cp())
app.get("/cookie",function(req,res){
    res.cookie("name","Express JS")
    res.cookie("fname","Sohani")
    res.cookie("lname","Payla")
    res.cookie("ID","2",{expires:new Date(Date.now()+10000)})
    res.cookie("email","sp@gmail.com",{maxAge:5000})
    res.send(req.cookies)
})
app.listen(3999)

// output check: inspect--> Application Tab ---> Cookies-->select your URL 