//create react app which contains form with following fields 1.name 2.email 3.password 4.confirm pass 5.message (textarea)
//6.gender(radio) 7.city(dropdown) display submitted value in an alert box 
import { useState } from "react";
function Us13()
{
    const [data, setdata] = useState({})
    function handlesubmit(e)
    {
        e.preventDefault()
        alert("Your details \n Name:" + data.fname + "\n Email:" + data.email + "\n Password:" + data.password + "\n Confirm password: " +
            data.password+"\n Message:"+data.msg+"\n Gender:"+data.r1+"\n City:"+data.city)
    }
    function handlechange(e)
    {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }
    return (
        <form onSubmit={handlesubmit}>
            Name:<input type="text" name="fname" onChange={handlechange}/><br />
            Email:<input type="email" name="email" onChange={handlechange}/><br />
            Password:<input type="password" name="password" onChange={handlechange} /><br />
            Confirm Password:<input type="password" name="password" onChange={handlechange} /><br />
            Message:<textarea rows={5} cols={15} name="msg" onChange={handlechange}></textarea><br />
            Gender: <br />
            <input type="radio" name="r1" value="Male" onChange={handlechange}/>Male
            <input type="radio" name="r1" value="Female" onChange={handlechange} />Female
            City: <br />
            <select name="city" onChange={handlechange} id="">
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
            </select>
            <br />
            <input type="submit" value="submit"/>
        </form>
    )
}
export default Us13