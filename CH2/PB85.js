const fs = require('fs');
fs.writeFileSync('test.txt', 'Exam Attempt\n');
fs.appendFileSync('test.txt', 'Entry1:Pass\nEntry2:Fail\nEntry3:Pass\n');
const content = fs.readFileSync('test.txt', 'utf8');
const parts = content.split('Pass'); 
const passCount = parts.length - 1;
console.log(`Pass count: ${passCount}`);
if (passCount >= 3) {
    fs.writeFileSync('test.txt', '');
    console.log('File erased.');
}