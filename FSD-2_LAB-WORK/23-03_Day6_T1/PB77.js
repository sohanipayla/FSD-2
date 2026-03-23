const fs = require('fs');
const path = require('path');
// 1)
fs.mkdirSync("Hello");
console.log("Folder Created");
// 2)
fs.writeFileSync("Hello/abc.txt", "Initial data.");
console.log("File Created");
// 3)
fs.appendFileSync("Hello/abc.txt", " Added more data.");
console.log("Data Appended");
// 4)
const data = fs.readFileSync("Hello/abc.txt", "utf8");
console.log("File Content:", data);
//5)
fs.renameSync("Hello/abc.txt", "Hello/xyz.txt");
console.log("File Renamed");
//6)
fs.unlinkSync("Hello/xyz.txt"); //first file delete
fs.rmdirSync("Hello"); //after folder delete
console.log("Deleted Everything");
