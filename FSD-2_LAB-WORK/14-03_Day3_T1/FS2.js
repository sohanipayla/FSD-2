// read data from file and arrange this data in ascending order
var fs=require("fs")
fs.writeFileSync("node/number.txt","50 -1 99 100 20 0 56 78 59")
data=fs.readFileSync("node/number.txt","utf-8");
d=data.split(" ").sort((a,b)=>a-b);// array formate string ma karva mate JSON.stringify()
console.log(d)
