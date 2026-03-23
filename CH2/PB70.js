const path = require('path');
// dirname()
console.log("Directory Name:", path.dirname('/user/docs/report.txt'));

// basename()
console.log("Base Name:", path.basename('/user/docs/report.txt'));

// extname()
console.log("Extension:", path.extname('/user/docs/report.txt'));

// parse()
console.log("Parse Object:", path.parse('/user/docs/report.txt'));