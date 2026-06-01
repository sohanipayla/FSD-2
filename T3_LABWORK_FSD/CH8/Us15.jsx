//build a react component for calculator that performs basic arithmetic operation using single state object
//1.Two number input and dropdown to select operations add,sub,multi,div all fields are required on from submit validate all fields prevent
//divide by 0 show result using alert box
import { useState } from "react";
function Us15()
{
    const [form, setform] = useState({})
    function handlechange(e)
    {
        setform({ ...form, [e.target.name]: e.target.value });
    }
    function calculate(e)
    {
        e.preventDefault();
        const a =parseInt(form.num1)
        const b = parseInt(form.num2)
        console.log(b)
        let result;
        if (form.op === "add")
        {
            result=a+b
        }
        else if (form.op === "sub")
        {
            result=a-b
        }
        else if (form.op === "mul")
        {
            result=a*b
        }
        else if (form.op === "div")
        {
            if (b == 0)
            {
                alert("cannot divide by zero")
            }
            else
            {
                result=a/b
            }
        }
        else
        {
            alert("invalid")
        }
        alert(`Result:${result}`)
    }
    return (
        <form onSubmit={calculate}>
            n1:<input type="number" name="num1" value={form.num1} onChange={handlechange} />
            <br />
            n2:<input type="number" name="num2" value={form.num2} onChange={handlechange} />
            <br />
            Operations:<br />
            <select name="op" onChange={handlechange} required>
                <option value=" ">Select</option>
                <option value="add">Addition</option>
                <option value="sub">Subtraction</option>
                <option value="mul">Multiplication</option>
                <option value="div">Division</option>
            </select>
            <br />
            <input type="submit" value="submit"/>
        </form>
    )
}
export default Us15