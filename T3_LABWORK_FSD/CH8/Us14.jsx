// create react app which contains form fields name, email Id , password and confirm password with submit but. when form submited the 
// values of password and confirm password must be same else it will give error in alrt also length of password must be greater than 8 else it 
// will give alrt if form submited successfully then dislpay entered name, and email id in alert box

import {useState} from "react"

function Us14(){

    const [formdata,setformdata] = useState({})
    function handlechange(event){
        const {name,value} = event.target
        setformdata({
            ...formdata,
            [name] : value
        })
    }

    function handlesubmit(e){
        e.preventDefault()
        if(!formdata.pass || formdata.pass.length <= 8){
            alert("Password length must be greater than 8")
        }

        else if(formdata.pass != formdata.cpass){
            alert("Password and Confirm Password must be same")
        }

        else{
            alert(
                "Form Submitted Successfully\n\nName: "
                + formdata.name
                + "\nEmail: "
                + formdata.email
            )
        }
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                Name:
                <input type="text" name="name" onChange={handlechange}/>
                <br /><br />
                Email Id:
                <input type="email" name="email" onChange={handlechange}/>
                <br /><br />
                Password:
                <input type="password" name="pass" onChange={handlechange}/>
                <br /><br />
                Confirm Password:
                <input type="password" name="cpass" onChange={handlechange}/>
                <br /><br />
                
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )

}

export default Us14