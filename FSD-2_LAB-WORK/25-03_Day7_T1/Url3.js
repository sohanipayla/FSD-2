 // write a node js script to print query srtring of url in file  using call back
// addr="http://localhost:8080/default.html?name=xyz&age=30"

var url = require('url');
var fs = require('fs');
process.noDeprecation=true;
var addr = "http://localhost:8080/default.html?name=xyz&age=30";
var q = url.parse(addr,true).query; 
qdata=JSON.stringify(q);
fs.writeFile("fsd1.txt",qdata,(err)=>{
    if(err) throw err;
    console.log("Written")
})
