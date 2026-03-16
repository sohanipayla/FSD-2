const fs=require("fs")
fs.mkdir("myfolder",(err)=>{
    if(err)throw err;
    console.log("Folder Created");
})