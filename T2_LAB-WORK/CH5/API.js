//  write an express js code in which rest api is created for JSON object named data which contains name,id,branch,city and
// contact property 1)on api page it should display all the containt 2) upon passing id on the browser url it should display
// the content having that id (localhost:7899/api/101) 3)upon passing branch on the browser url it should display the
// content having that branch (localhost:7899/api/branch/it)

const express = require('express');
const router=express.Router();

const data = [
    { id: "101", name: "ABC", branch: "CSE", contact: 9898989898, city: "Surat" },
    { id: "102", name: "BCD", branch: "CE", contact: 8888888888, city: "Pune" },
    { id: "103", name: "XYZ", branch: "CSE", contact: 7777777777, city: "Delhi" },
    { id: "104", name: "PQR", branch: "IT", contact: 6565656565, city: "Mumbai" },
    { id: "105", name: "ABC", branch: "CSE", contact: 4848488484, city: "Palanpur" },
    { id: "106", name: "ABC", branch: "IT", contact: 3333333333, city: "Ahemdabad" }
];
// 1) Display all content (localhost:7899/api)
router.get('/', (req, res) => {
    res.set("content-type","text/html");
    for(i of data)
    {
        res.write("<h3> ID:"+i.id+"Name:"+i.name+"Branch:"+i.branch+"contact:"+i.contact+"city:"+i.city+"</h3>")
    }
    res.send()
});

// 2) Display content by id (localhost:7899/api/101)
router.get("/:id",(req,res)=>{
    var current_data=data.filter((i1)=>i1.id==req.params.id)
    if(current_data.length>0){
        res.send(current_data)
    }
    else{
        res.send("ID Not Found")
    }
})

// 3) Display content by branch (localhost:7899/api/branch/it)
router.get("/branch/:branch", (req, res) => {
    const current_branch = data.filter((b) => b.branch.toLowerCase() === req.params.branch.toLowerCase());
    if (current_branch.length > 0) {
        res.send(current_branch);
    } else {
        res.send("Branch Not Found");
    }
});
module.exports=router