// write a node script to copy content of one file to another file data should be fetch from source.txt and copy to 
// destination.txt at the end read data from destinationfile perfom this all task Async using copy method .
var fs = require("fs");
fs.writeFile("source.txt", "This is data of source file", (err) => {
    if (err) throw err;
    console.log("SourceFile Created");
    fs.copyFile("source.txt", "destination.txt", (err) => {
        if (err) throw err;
        console.log("Data copied");
        fs.readFile("destination.txt", "utf-8", (err, data) => {
            if (err) throw err;
            console.log("The file is read");
            console.log("The data in destination file is:", data);
        });
    });
});
