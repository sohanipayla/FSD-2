const fs = require('fs');
// Read data from source.txt (asynchronous)
fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    // Write data to destination.txt
    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File copied successfully!");
    });
});