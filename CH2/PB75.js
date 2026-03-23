const fs = require('fs');
var nums = [23, 10, 45, 5, 88];
var str = "";
for (var n of nums) {
  str += n + " ";
}
fs.writeFileSync("data.txt", str);
nums.sort((a, b) => a - b);
fs.appendFileSync("data.txt", "\nSorted array: " +nums.join(" "));
var maxNum = nums[nums.length - 1];
fs.appendFileSync("data.txt", "\nmaximum number=" + maxNum);
console.log("File saved successfully!");