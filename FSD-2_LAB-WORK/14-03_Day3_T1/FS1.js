var fs=require("fs");
//fs.mkdirSync("node")  //create a directory
//fs.writeFileSync("node/write.txt","Be kind")
// fs.appendFileSync("node/write.txt"," to everyone") 
// fs.renameSync("node/write.txt","node/rw.txt")

// FIRST METHOD
// data=fs.readFileSync("node/rw.txt")
// console.log(data) //bufferdata
// console.log(data.toString())


// Second Method
data=fs.readFileSync("node/rw.txt","utf-8")
console.log(data)
// fs.unlinkSync("node/rw.txt")
// fs.rmdirSync("node")