// writing data to file append data to file and then reading the file using callback function 
var fs=require("fs");
fs.writeFile("data.txt","Good Morning",function(err)
{
    if(err){
        console.log(err)
    }
    else{
        fs.appendFile("data.txt","Good Moring",function(err)
    {
        if(err){
            console.log(err)
        }
        else{
            fs.readFile("data.txt","utf-8",(err,data)=>
            {
                if(err){
                    console.log(err)
                }
                else{
                    console.log(data)
                }
            })
        }
    })
    }
})