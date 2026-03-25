// write a node js program to parse a url and calculate the avg of three numbers passed as query parameter 
// url="http://localhost:8080/test?m1=50&m2=60&m3=70"

u= require("url");
process.noDeprecation=true;
var addr = "http://localhost:8080/test?m1=50&m2=60&m3=70";
var q = u.parse(addr, true).query;
var m1 = parseInt(q.m1);
var m2 = parseInt(q.m2);
var m3 = parseInt(q.m3);
var avg = (m1 + m2 + m3) / 3;
console.log("Average is: " + avg);