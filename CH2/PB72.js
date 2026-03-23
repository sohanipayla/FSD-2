const fs = require('fs');
// Write content to file
fs.writeFile('sample.txt', "Hello, this is some sample content.", (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("Content written successfully!");
    // Delete file after writing
    fs.unlink('sample.txt', (err) => {
        if (err) {
            console.log("Error deleting file:", err);
            return;
        }
        console.log("File deleted successfully!");
    });
});