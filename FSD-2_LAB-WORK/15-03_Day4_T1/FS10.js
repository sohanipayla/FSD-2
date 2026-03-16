//write a node js script and json to perfomr below task 
//  {d:{a:10,b:20,c:[30,10]}}
// 1) write following object in textfile named F2.txt
// 2)read data from the samefile and perfome 
// (a)addition of a and b 
// (b)subtraction of second element of c and b (must be a positive value)
// (c)multiplication of element of c
// 3)add the output of Addition,subtraction and multiplication in file F2.txt using SYNCHRONOUS

var fs = require('fs');
var obj = { d: { a: 10, b: 20, c: [30, 10] } };
// 1) 
fs.writeFileSync("F2.txt", JSON.stringify(obj));
// 2) 
var data = JSON.parse(fs.readFileSync("F2.txt", "utf-8")).d;
// (a) 
var add = data.a + data.b;
// (b) 
var sub = Math.abs(data.c[1] - data.b);
// (c) 
var mult = data.c[0] * data.c[1];   
// 3)
fs.appendFileSync("F2.txt", `\nAdd: ${add}\nSub: ${sub}\nMult: ${mult}`);