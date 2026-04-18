// write express js to print message in next line spliting by dot and use get method to submit the data html file contains a text area 
// and a submit button 
express = require("express")
app = express()
app.use(express.static(__dirname,{index:'2.html'}))
app.get('/mes', function(req,res){
    res.set("content-type","text/html");
    m=req.query.mes
    data= m.split('.')
    for (i in data){
        res.write(data[i]+"<br>")
    }
    res.send()
})
app.listen(3031)