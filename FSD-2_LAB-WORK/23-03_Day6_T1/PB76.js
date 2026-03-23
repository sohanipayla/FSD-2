var inp = [['Country', 'India'],['State', 'Gujarat'],['City', 'Ahmedabad']]

var op = {}
for(i in inp){
    op[inp[i][0]] = inp[i][1]; 
}
var fs = require("fs")
fs.writeFileSync("PB767.txt",JSON.stringify(op))

console.log(op)