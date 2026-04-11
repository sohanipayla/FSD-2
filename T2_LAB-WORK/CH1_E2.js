var express=require("express");
var app=express()
app.get("/",(req,res)=>{
    res.set("content-type","text/plain")
    res.send("<h1>Be Kind </h1>")
})
app.get("/about",(req,res)=>{
    res.set("content-type","text/html")
    // res.write("<h1>to everyone</h1>") 
    res.send("<b>to one and all </b>")
})
app.listen(6051,()=>{console.log("program is running")})