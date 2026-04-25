const express = require('express');
const app = express();
const multer = require('multer');

app.use(express.static(__dirname, { index: 'm2.html' }));

const store = multer.diskStorage({
    destination: "Multiple",
    filename: function(req, file, cb) {
        const timestamp = Date.now();
        cb(null, "myfile(" + timestamp + ").docx");
    }
});

var upload = multer({ storage: store });

app.post("/uploadmultiple", upload.array("pixel", 5), (req, res) => {
    const files = req.files;
    
    if (files && files.length > 0) {
        let result = "<h1>Files Uploaded:</h1>";
        for (let f of files) {
            result += "<h3>" + f.filename + "</h3>";
        }
        res.send(result);
    } else {
        res.send("<h1>No files selected!</h1>");
    }
});

app.listen(3569);
