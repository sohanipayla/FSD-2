// write a node js to create file name "test.txt" containing the initial text "Exam Attempt" then it shold add three more
//  line to the file "Entry1:Pass" ,"Entry2:Fail","Entry3:Pass"/after writing the program must a read the file and 
// count how many times the word pass apears and if the word pass appeared three or more times the program should 
// erase the contain insidetest.txt using SYNCHRONOUS 

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