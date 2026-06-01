//write a prgm a build react app having button by clicking on modify this text button text should be change to updated text and vice-versa
import { useState } from "react";
function Us3()
{
    const[name,setName]=useState("Modify this text");
    function changeName()
    {
        if(name=="Modify this text")
        {
            setName("Updated text")
        }
        else
        {
            setName("Modify this text")
        }
    }
    return(
        <div>
            <button onClick={changeName}>{name}</button>
        </div>
    )
}
export default Us3