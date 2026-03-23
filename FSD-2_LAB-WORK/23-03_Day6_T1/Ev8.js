// FS sync + event module
// 1) Create a folder name abc.
// 2) Create a file emit xyz.txt and enter data into it.
// 3) Appened data to xyz.txt and print the msg 'data appened succesfully'.
// 4) Read the content from xyz.txt and print on console.
// 5) Copy the content from xyz.txt to pqr.txt.
// 6) Delete the file xyz.txt and lastly print msg 'all opretions perform succesfully'
var myevent1 = require("events")
var fs = require("fs")
ee = new myevent1()
ee.on("makeDir",function(){
    if(!fs.existsSync("ABC")){
        fs.mkdirSync("ABC")
    }
    else{
        console.log("Folder Already Exists")
    }
})
ee.on("Create",function(){
    fs.writeFileSync("ABC/xyz.txt","XYZ file is created")
})
ee.on("Append",function(){
    fs.appendFileSync("ABC/xyz.txt","\nData appended to XYZ file")
})
ee.on("Read",function(){
    data = fs.readFileSync("ABC/xyz.txt","utf-8")
    console.log(data)
})
ee.on("Copy",function(){
    fs.copyFileSync("ABC/xyz.txt","ABC/pqr.txt")
})
ee.on("Delete",function(){
    fs.unlinkSync("ABC/xyz.txt")
    console.log("all opretions perform succesfully")
})
ee.emit("makeDir")
ee.emit("Create")
ee.emit("Append")
ee.emit("Read")
ee.emit("Copy")
ee.emit("Delete")