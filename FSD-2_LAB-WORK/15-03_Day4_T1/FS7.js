// write a node script to copy content of one file to another file data should be fetch from source.txt and copy to 
// destination.txt at the end read data from destinationfile perfom this all task ASYNCHRONOUSLY.
const fs = require('fs');
fs.writeFile("source.txt","GoodMorning",(err)=>{
    if(err) throw err;
    console.log("SourceFile Created")
fs.readFile("source.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log("Data From Source"+data);

    fs.writeFile("destination.txt", data, (err) => {
        if (err) throw err;
        console.log("Data Copied to destination.txt");
        fs.readFile("destination.txt", "utf8", (err, finalData) => {
            if (err) throw err;
            console.log("Final Content in Destination:", finalData);
        });
    });
     });
});