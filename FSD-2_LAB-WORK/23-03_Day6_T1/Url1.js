// write a program to featch the quesry string from the url and check if year is leap year or not
u= require("url");
process.noDeprecation=true;
var addr= "http://localhost:8080/default.html?year=2026&month=may"
var q = u.parse(addr,true)
console.log(q);
year= q.query.year;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("yes leap year");
}
else{
    console.log("not leap year");
}