//develop a mongodb based application using mongoosh you need to define a users schema that includes various validation rules to ensures data
//integrity and consistency 
//for username:
//1.required must be 4 to 20 characters
//2.must start with letters and ends with digits 
//3.should be trimmed of any leading and trailing spaces
//4.should be converted uppercase before saving
//for email:
//1.required and must be unique across the collection
//2.must follow standard email format
//for age:
//1.must be a number btw 18 to 65
//for role:
//1.must be either user or admin
//2.set default to user if not provided
//databasename:validations  collection name:userdata


const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/validations").then(()=>{console.log("success")}).catch((err)=>{console.log(err)})
mg.pluralize(null);
const userSchema=new mg.Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        minlength:[4,'username must be at least 4 char long'],
        maxlength:[20,'cannot be more than 20 char long'],
        match:[/^[A-Za-z]+[0-9]+$/,"must match RE"],
        trim:true,uppercase:true
    },
    email:{
        type:String,
        unique:[true,"email must be unique"],
        required:[true,"must be there"],
        match:[/\S+@+\S+\.\S+/,"please enter valid id"]
    },
    age:{
        type:Number,
        min:[18,"min value is 18"],
        max:[65,"max value is 65"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    active:Boolean,
})
const user=new mg.model("userdata",userSchema)
const createDoc=async()=>{
    try{
        const newuser=new user({
            username:"XY34",
            email:"x@gmail.com",
            age:25,
            role:"user"
        })
        const result=await newuser.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
createDoc()