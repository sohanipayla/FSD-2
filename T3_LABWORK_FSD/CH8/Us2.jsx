//create a prgm to build react app having buttons to ncreemet and decrement the number by clicking that respective button  also increment
//of the number should be perform only if the no is less than 10 and decrement of the number should be performed if the number is greater
//than 0
import { useState } from "react";
function Us2()
{
    const[count,setCount]=useState(0);
    function handlecount1()
    {
        if(count<10){
            setCount(count+1)
        }
    }
    function handlecount2()
    {
        if(count>0){
            setCount(count-1)
    }
        }
    return(
        <div>
            <p>you have clicked {count} times</p>
            <button onClick={handlecount1}>Click here to increment</button>
            <button onClick={handlecount2}>Click here to decrement</button>
        </div>
    )
}
export default Us2