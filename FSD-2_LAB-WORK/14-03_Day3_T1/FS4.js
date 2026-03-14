// write node js script to write an array of object with properties cricketer's name and their number in a file 
// namedplayes.txt then read the file and print data on console
var fs = require('fs');
const players = [
    { name: "Virat Kohli", number: 18 },
    { name: "MS Dhoni", number: 7 },
    { name: "Rohit Sharma", number: 45 }];
    fs.writeFileSync('players.txt', JSON.stringify(players));
    console.log("Data written to players.txt");
    data= fs.readFileSync('players.txt', 'utf8');
    parsedData = JSON.parse(data);
console.log("Data from file:", parsedData);