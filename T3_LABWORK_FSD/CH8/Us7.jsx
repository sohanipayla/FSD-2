//write react component button and an img by clicking on button image changes randomly from a given array of images 
import { useState } from "react";
import img1 from "./assets/pr.jpg"
import img2 from "./assets/product1.jpg"
import img3 from "./assets/nature.jpg"
import img4 from "./assets/sunset.jpg"
import img5 from "./assets/view.jpg"
function Us7()
{
    const arr=[img1,img2,img3,img4,img5];
    const[img,setimg]=useState(img1);
    function handleimg()
    {
        const random=Math.floor(Math.random()*arr.length)
        setimg(arr[random])
    }
    return(
        <div>
            <button onClick={handleimg}>Click</button>
            <img src={img}></img>
        </div>
    )
}
export default Us7