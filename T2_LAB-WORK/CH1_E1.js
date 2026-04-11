var express=require("express");
var app=express()
app.get('/',(req,res)=>{
    res.set("content-type","text/plain");
    // res.type("text/plain");
    // res.setHeader("content-type","text/plain");
    res.send("Hello World")
    // send--> set Header + write +end
})
app.listen(3005)

