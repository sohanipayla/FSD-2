//create a react component that manages multiple form input field using a single state object and displays the values in real time
import { useState } from "react";
function Us9()
{
    const [data, setdata] = useState({})
    function handlechange(e)
    {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }
    return (
        <div>
            <input type="text" name="fname" onChange={handlechange}></input>
            <input type="text" name="lname" onChange={handlechange}></input>
            <h1>Firstname:{data.fname}</h1>
            <br />
            <h1>Lastname:{data.lname}</h1>
        </div>
    )
}
export default Us9