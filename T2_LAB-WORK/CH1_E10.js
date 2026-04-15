// create a basic web application that displays a form on the home page to enter users name and marks sends the form data to the server 
// using a post request the server should read the submitted name and marks from the request body finally display msg that user1 get
express=require("express");
app=express();
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<h1>User form</h1>
        <form action="/user" method="POST">
        Name:<input type="text" name="n1"/>
        T1:<input type="text" name="t1"/>
        T2:<input type="text" name="t2"/>
        T3:<input type="text" name="t3"/>
        <button type="submit">Calculte</button>
        </form>`)
});
app.post("/user",(req,res)=>{
    name1=req.body.n1;
    T1=req.body.t1;
    T2=req.body.t2;
    T3=req.body.t3;
    res.send(name1+ " avg marks: "+ ((T1+T2+T3)/3));
})
app.listen(6059,()=>{
    console.log("calculating avg")
})