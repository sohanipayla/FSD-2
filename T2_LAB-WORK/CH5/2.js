express=require("express")
app=express()
app.use(express.static("Frontend",{index:"2.html"}))
app.listen(5624)