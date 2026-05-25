// create a component to perform the following task 1) add a text field and submit button while changed value in the text
//  field display it in below the form 2) display this text field in an alert box upon submitting it add a button to perform
// click and double click event on click event display msg in h3 tag you click once on double click display msg in h3 tag
// you clicked twice badhi filed css provide karvani 
function Map1(){
    function handlesubmit(e){
        e.preventDefault();
        alert(document.getElementById("uname").value);
    }
    function handleclick(){
        document.getElementById("test1").innerHTML="you clicked once"
    }
    function handledoubleclick(){
        document.getElementById("test1").innerHTML="you clicked twice"
    }
    function handlechange(event){
        document.getElementById("test").innerHTML=event.target.value
    }
    
    return(
        <div>
            <form onSubmit={handlesubmit} style={{ margin: "20px", padding: "10px" }}>
                <input 
                    type="text" 
                    id="uname" 
                    onChange={handlechange} 
                    style={{ padding: "10px", margin: "10px", border: "1px solid gray", width: "200px" }}
                />
                <button 
                    type="submit" 
                    style={{ color: "white", backgroundColor: "green", padding: "10px 15px", margin: "10px" }}
                >
                    Submit
                </button>
            </form>
            <p style={{ marginLeft: "30px", fontWeight: "bold" }}>
                Live Text: <span id="test" style={{ color: "green" }}></span>
            </p>
            <div>
                <button 
                    onClick={handleclick} 
                    onDoubleClick={handledoubleclick}
                    style={{ color: "white", backgroundColor: "blue", padding: "12px 20px", margin: "10px" }}
                >
                    Click or Double Click Me
                </button>

                <h3 id="test1" style={{ color: "darkblue", marginLeft: "10px" }}></h3>
            </div>
        </div>
    );
}

export default Map1;
