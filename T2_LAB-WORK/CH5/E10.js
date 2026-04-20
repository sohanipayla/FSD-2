// create a basic web application that displays a form on the home page to enter users name and marks sends the form data to the server 
// using a post request the server should read the submitted name and marks from the request body finally display msg that user1 get
express=require("express")
app=express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send(`<h1> User Form </h1> <form action="/user" method="POST">
        <input type="text" name="n1"> T1 
        <input type="number" name="m1"> T2
         <input type="number" name="m2"> T3 
         <input type="number" name="m3"> 
         <button type="submit">calculate</button> </form>`)
})


app.post("/user",(req,res)=>{
    name=req.body.n1
    m1=parseInt(req.body.m1)
    m2=parseInt(req.body.m2)
    m3=parseInt(req.body.m3)
    avg=(m1+m2+m3)/3
    res.send(name+" = "+avg)
})

app.listen(6055,()=>{
    console.log("running")
})