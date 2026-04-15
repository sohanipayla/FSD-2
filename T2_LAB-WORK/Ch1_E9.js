express=require("express");
app=express();
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<h1>User form</h1>
        <form action="/user" method="POST">
        <input type="text" name="n1"/>
        <button type="submit">Click here</button>
        </form>`)
});
app.post("/user",(req,res)=>{
    name1=req.body.n1;
    res.send(name1);
})
app.listen(6053,()=>{
    console.log("running")
})