const mg=require("mongoose") 
mg.connect("mongodb://127.0.0.1:27017/data").then(()=>{console.log("success")}).catch((err)=>{console.error(err)}); 
mg.pluralize(null)
const mySchema=new mg.Schema( 
    { 
        name:{ 
            type:String, 
            required:true 
        }, 
        Surname:String, 
        age:Number, 
        active:Boolean, 
        date:{ 
            type:Date, 
            default:new Date() 
        } 
    } 
); 
const faculty=new mg.model("faculty",mySchema)
const createDoc=async()=> 
    { 
        try{ 
        const facultydata=[
            { 
                name:"ZALAK", 
                Surname:"BHATT", 
                age:32, 
                active:true 
            } ,
            { 
                name:"SWATI", 
                Surname:"PATEL", 
                age:33, 
                active:true 
            } ,
                { 
                    name:"MEHUL", 
                    Surname:"KHOLIYA", 
                    age:32, 
                    active:false 
                } 
        ] 
            

           const result= await faculty.insertMany (facultydata) 
            console.log(result) 
        } 
            catch(err) 
            { 
                console.log("problem"); 
            } 
    } 
createDoc(); 