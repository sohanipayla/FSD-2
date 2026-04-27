nm=require("nodemailer")
express=require("express");
app=express();
app.get("/",(req,res)=>{
    
    trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"graphinity0301@gmail.com",
        pass:"nbfu apma kqgr mjmb"
    }
})
var mailOptions={
    from:"graphinity0301@gmail.co",
    to:"samphotography540@gmail.com",
    subject:"hello",
    text:"Test Mail",
    html:"Testing Node mailer,<h1>Effect of </h1>"
}
trans.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(err)
    }
    console.log(info)
    res.send("Thank You")
})
})
app.listen(7557);
