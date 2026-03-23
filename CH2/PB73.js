const fs = require('fs');
// Step 1: Write
fs.writeFile('help.txt', "You are creating a file\n", (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("Write operation completed");

    // Step 2: Append
    fs.appendFile('help.txt', "you are appending data", (err) => {
        if (err) {
            console.log("Error appending file:", err);
            return;
        }
        console.log("Append operation completed");

        // Step 3: Read
        fs.readFile('help.txt', 'utf8', (err, data) => {
            if (err) {
                console.log("Error reading file:", err);
                return;
            }
            console.log("File Content:\n" + data);
            
            // Final message
            console.log("Thanks for using my program");
        });
    });
});