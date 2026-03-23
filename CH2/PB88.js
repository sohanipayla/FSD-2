const fs = require('fs');
// JSON Objects
let division1 = {
    numbers: [2, 3, 4, 5, 6]
};
let division2 = {
    numbers: [3, 2, 1, 2, 3]
};
let result = [];
// Calculate a^b
for (let i = 0; i < division1.numbers.length; i++) {
    let base = division1.numbers[i];
    let power = division2.numbers[i];
    result[i] = Math.pow(base, power);
}
// Write objects to file
let data = {
    division1: division1,
    division2: division2
};
fs.writeFileSync("XYZ.txt", JSON.stringify(data, null, 2));
fs.appendFileSync("XYZ.txt", "\nResult: " + result.join(" "));
console.log("Result:", result);