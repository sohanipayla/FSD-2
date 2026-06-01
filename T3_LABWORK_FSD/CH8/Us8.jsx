//Write a program to build React app to perform the tasks as asked below.
// •	Add a button “Change Text”.
// •	Add “Hello” text in h2 tag.
// •	By clicking on “Change text” button text should be changed to “How are 
// you?” and vice versa. 
import { useState } from "react";
function Us8()
{
    const[text1,settext]=useState("Hello")
    function handletext()
    {
        if(text1=="Hello")
        {
            settext("How are you")
        }
        else
        {
            settext("Hello")
        }
    }
    return(
        <div>
            <button onClick={handletext}>Change text</button>
            <h2>{text1}</h2>
        </div>
    )
}
export default Us8