// CREATE  a webserver that accept a get request with a dynamic user id in the url also accept additional data name and 
// age using querry parameter extract id from root parameters name and age from querry string returnsa json respons  containg 
// all recived data  
//http:localhost:3030/user/44?name=shyam&age=18 

var express = require("express");
var app = express();

app.get("/user/:id", (req, res) => {
     userid = req.params.id;
     name = req.query.name;
     age = req.query.age;
    res.json({
       id: userid,
       name1: name,
       age1: age
    });
});
app.listen(3030,()=>{
    console.log(`Test link: http://localhost:3030/user/44?name=shyam&age=18`);
    console.log("running")

})
