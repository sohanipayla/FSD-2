/*write express js script to upload file with size limit of 10mb to a specific directory 
named 'data' and in this forlder file must be stored informate of 'LJU-File.pdf' 
where lju is the field name  (1mb=1024*1024)*/
express=require("express");
app=express();
multer=require("multer");
app.use(express.static(__dirname,{index:'m3.html'}));
store=multer.diskStorage(
    {
        destination:"Data",
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+file.originalname+".pdf")
        }
    }
)
var upload=multer({storage:store, limits:{fileSize:10*1024*1024}});
app.post("/uploadfile",
    upload.array("lju",5),
    (req,res)=>
    {
        const file=req.files;
        if(file)
        {
            res.set("content-type","text/html")
            for(i of file){
            res.write("<h1>File "+i.originalname+" has been uploaded in "+i.destination+" folder")
        }
        res.send();
    }
    }
);
app.listen(7558);