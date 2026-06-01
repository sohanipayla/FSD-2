//write a prgm to build react app having a buttpn which changes img by clciking on it
import { useState } from "react";
import img1 from "./assets/pr.jpg"
import img2 from "./assets/product1.jpg"
function Us6()
{
    const[img,setimage]=useState(img1)
    function handleimg()
    {
        if(img==img1)
        {
            setimage(img2)
        }
        else
        {
            setimage(img1)
        }
    }
    return(
        <div>
            <button onClick={handleimg}>Click</button>
            <img src={img}></img>
        </div>
    )
}
export default Us6