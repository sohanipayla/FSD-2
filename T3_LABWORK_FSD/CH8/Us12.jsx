//radio button
import { useState } from "react";
function Us12(){
    const [name, setname] = useState(" ")
    function handlesubmit(e)
    {
        e.preventDefault()
        alert(`You entered: ${name}`)
    }
    function optionchange(e){
        setname(e.target.value)
    }
    return(
        <form onSubmit={handlesubmit}>
                <input type="radio" name="r1" value="small" onChange={optionchange}/>Small
                <input type="radio" name="r1" value="medium" onChange={optionchange}/>Medium
                <input type="radio" name="r1" value="large" onChange={optionchange}/>Large
                <br />
            <input type="submit" value="submit" />
        </form>
        
    )
}
export default Us12