//write a node js script that performs the following operations using the path module and the ASYNCHRONOUs file system module 
// 1) from a given existing file path extract the directory name using path module 
// 2) create the extracted directory inside and existing folder using fs module
// 3)extract the file name from the given path using path module
// 4) create that file inside the newly created directory and write some data into it
// 5) copy the content of this file to another file
// 6) delete the original file after coping the content using ASYNCHRONOUS 
//  PATH: "LJ/sample.txt"

const fs = require('fs');
const pm = require('path');

// 1) Directory name extract kiya
const dirName = pm.dirname("LJ/sample.txt"); 

// 2) Directory banayi (LJ folder pehle se hona chahiye)
fs.mkdir(dirName, (err) => {
    if (err) throw err;
    console.log("Directory created");

    // 3) Filename extract kiya aur path banaya manually
    const fileName = pm.basename("LJ/sample.txt");
    const newPath = dirName + "/" + fileName;

    // 4) File create ki aur data likha
    fs.writeFile(newPath, 'This is some data', (err) => {
        if (err) throw err;
        console.log("File written");

        // 5) File copy ki (nayi file ka naam 'copy.txt' rakha hai)
        const copyPath = dirName + "/copy.txt";
        fs.copyFile(newPath, copyPath, (err) => {
            if (err) throw err;
            console.log("File copied");

            // 6) Original file delete ki
            fs.unlink(newPath, (err) => {
                if (err) throw err;
                console.log("Original file deleted");
                console.log("All Tasks Completed");
            });
        });
    });
});
