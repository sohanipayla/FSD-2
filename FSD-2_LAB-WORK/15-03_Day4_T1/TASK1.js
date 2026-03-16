//  async-->mkdiruske bad write uskibad unlink uske bad rmdir

const fs = require('fs');
fs.mkdir("myfolder",(err)=>{
    if (err) throw err;
    console.log("Folder Created");
    fs.writeFile("myFolder/test.txt", "Hello World",(err)=>{
        if (err) throw err;
        console.log("File Created");
        fs.unlink("myFolder/test.txt", (err) =>{
            if (err) throw err;
            console.log("File Deleted");
            fs.rmdir("myFolder", (err) =>{
                if (err) throw err;
                console.log("Folder Removed.");
            })
        })
    })
})