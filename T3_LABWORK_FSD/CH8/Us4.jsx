//write a prgm to build react app having a heading LJU in red color by clicking on change color button change the color of text to blue
// and vice-versa
import { useState } from "react";
function Us4()
{
    const[text,setColor]=useState("red");
    function changeName()
    {
        if(text=="red")
        {
            setColor("blue")
        }
        else
        {
            setColor("red")
        }
    }
    return(
        <div>
            <h1 style={{color:text}}>LJ University</h1>
            <button onClick={changeName}>Click Here</button>
        </div>
    )
}
export default Us4