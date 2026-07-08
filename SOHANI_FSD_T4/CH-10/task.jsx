var expr = require("express")
var app = expr() 
const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/entertainment").then(()=>{console.log("success")}).catch((err)=>{console.error(err)}); 
mg.pluralize(null)
const mySchema=new mg.Schema({
    uname:{type:String,required:true},
    password:{type:String,required:true}
})
const person=newmg.model("data1",mySchema)
app.use(expr.static(__dirname,{index:"form.html"}))
app.get("/process_get",async(req,res)=>{
    const personData=new person({
        uname:req.query.uname,
        password:req.query.pwd
    })
    await personData.save()
    res.send("Record inserted")
})
app.listen(8000)