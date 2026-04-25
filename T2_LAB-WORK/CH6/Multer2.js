// write an express js script that accep multiple file maximum number file to be uploaded using multer 
// middleware and saves the file to the specific directory called multiple maximum 5 file uplod honi chaiye 

const express = require('express');
const app = express();
const multer = require('multer');
app.use(express.static(__dirname,{index:'m2.html'}))
store=multer.diskStorage({
    destination:"Multiple",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload=multer({storage:store});
app.post("/uploadmultiple", upload.array("pixel", 5), (req, res) => {
    const files = req.files;
    
    if (files && files.length > 0) {
        let Msg = "<h1>Uploaded Files:</h1><ul>";
        
        for (let i = 0; i < files.length; i++) {
            Msg += "<li>" + files[i].originalname + "</li>";
        }
        
        Msg += "</ul><p>Total " + files.length + " files uploaded in Multiple folder.</p>";
        res.send(Msg);
    } else {
        res.send("<h1>No files selected!</h1>");
    }
});

app.listen(3548);