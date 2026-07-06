const mg = require('mongoose'); 
mg.connect("mongodb://127.0.0.1:27017/ljku").then(()=>{console.log("success")}).catch((err)=>{console.error(err)}); 
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
            default:new Date().toLocaleDateString()
        } 
    }
)
const person=new mg.model("person",mySchema) 
const createDoc=async()=> 
    { 
     try{ 
        const personData=new person( 
            { 
                name:"def", 
                Surname:"test", 
                age:31, 
                active:true, 
                email:"abc@gmail.com" 
            } 
        )  
    const result=await personData.save(); 
    console.log(result);
        } 
        catch(err) 
    { 
        console.log("Error Occured" + err); 
    }
    } 
createDoc()