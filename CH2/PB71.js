const fs = require('fs');

fs.readFile('numbers.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    let numbers = data.split(" ");
    // Convert string to number
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);  //Number yato Parseint use kar sakte hai
    }
    // Sort numbers
    numbers.sort((a, b) => a - b);
    console.log("Sorted Numbers:", numbers.join(" "));
});