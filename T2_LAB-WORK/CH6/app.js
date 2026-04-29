express=require("express")
app=express()
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('first',{name:'Raj'})
})
app.listen(3800)