const fs = require('fs');
// Step 1: Write
fs.writeFileSync('new.txt', "This is data\n");
console.log("Write operation completed");

// Step 2: Append
fs.appendFileSync('new.txt', "That is data");
console.log("Append operation completed");

// Step 3: Read
const data = fs.readFileSync('new.txt', 'utf8');
console.log("File Content:\n" + data);

// Final message
console.log("Thank you for using program");