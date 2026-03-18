//  D:/FSD/ZPB.html
//  dirname,basename,extention 
const path = require('path');
const p= path.parse("D:/FSD/ZPB.html");
console.log("Dirname:", p.dir);      // D:/FSD
console.log("Basename:", p.base);    // ZPB.html
console.log("Extension:", p.ext);    // .html
console.log(p.name);