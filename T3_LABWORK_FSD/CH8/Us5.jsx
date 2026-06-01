//write a prgm to build react app having button initially button text should be hide while clicking on it button text should be changed
// to show and text React js hooks will not be show and vice-versa
import { useState } from "react";
function Us5()
{
    const[buttontext,setbutton]=useState("hide")
    const[hidetext,sethide]=useState("React JS Hook")
    function handletext()
    {
        if(buttontext=="hide")
        {
            setbutton("Show")
            sethide("")
        }
        else{
            setbutton("hide")
            sethide("React JS Hook")
        }
    }
    return(
        <div>
            <button onClick={handletext}>{buttontext}</button>
            <h2>{hidetext}</h2>
        </div>
    )
}
export default Us5