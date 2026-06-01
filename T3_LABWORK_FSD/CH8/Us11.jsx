import { useState } from "react";
function US11(){
    const[name,setname]=useState(" ")
    function handleSubmit(e){
        e.preventDefault()
        alert(`You entered: ${name}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            Select car brand: 
            <select name="car" value={name} onChange={(e)=>setname(e.target.value)} id="">
                <option value="mercedes">mercedes</option>
                <option value="bmw">bmw</option>
                <option value="ciaz">ciaz</option>
            </select>
            <br />
            <input type="submit" value="submit" />
        </form>
        
    )
}
export default US11