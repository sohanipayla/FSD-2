//fetching through request.query
express=require("express");
app=express();
app.get("/data",(req,res)=>{
    const name=req.query.name;
    const age=req.query.age;
    res.send("Name:"+name+"age:"+age);
})
app.listen(3021);

