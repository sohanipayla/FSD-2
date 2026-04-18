// write an express script one json array of 3 object having properties like comedians name and age sort this object according to age if 
// user request sorted names in url then all names along with age should be printed according to descending order of age also display
// this sorted values on sort page and display json object on home page
const express=require("express");
app=express();
comedian={
    u1:[{name:'A',age:20},
        {name:'B',age:40},
        {name:'C',age:60}
    ]
}
app.get("/sort",(req,res)=>{
    res.set("content-type","text/html");
    data=comedian.u1.sort((a,b)=>b.age-a.age);
    for (i of data)
    {
        res.write("<center><h2>"+i.name+"="+i.age+"</h2></center>")
    }
})
app.get("/home",(req,res)=>{
    res.json(comedian.u1);
});
app.listen(3053);