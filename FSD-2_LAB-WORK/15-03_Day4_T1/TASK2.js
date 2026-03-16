const fs = require('fs');
fs.mkdir("xyz", (err) => {
    if (err) throw err;
    console.log("Folder 'xyz' created.");
    fs.writeFile("xyz/x.txt", "Hello", (err) => {
        if (err) throw err;
        console.log("File 'x.txt' created inside 'xyz'.");
        fs.rmdir("xyz", (err) => {
            if (err) {
                console.log("RESULT: rmdir DID NOT work!");
                console.log(err.message); 
            } else {
                console.log("Folder deleted successfully.");
            }
        });
    });
});
