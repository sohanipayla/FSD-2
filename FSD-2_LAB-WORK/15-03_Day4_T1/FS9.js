// write a node js script to write the text "you are creating a file" to help.txt file after that apend the text 
// "you are appending the data" to the same help.txt file after that read the file and print File content on console
// after printing copy the txt to nextTick.txt file from next.txt file at the end print the msd "thanks for using my program"
// using ASYNCHRONUS , callback method
var fs = require("fs");
fs.writeFile("help.txt", "you are creating a file", (err) => {
    if (err) throw err; 
    console.log("File Created");
    fs.appendFile("help.txt", " you are appending the data", (err) => {
        if (err) throw err;
        console.log("Data Appended");
        fs.readFile("help.txt", "utf-8", (err, data) => {
            if (err) throw err;
            console.log("The data in help.txt is:", data);
            fs.copyFile("help.txt", "next.txt", (err) => {
                if (err) throw err;
                console.log("Thanks for using my program");
            });
        });
    });
});
