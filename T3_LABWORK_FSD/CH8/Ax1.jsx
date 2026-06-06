import { useState, useEffect } from 'react';
import axios from 'axios'; 

function Ax1() {
  const [myimg, setimg] = useState("");

  useEffect(() => {
     setInterval(() => {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          console.log(response.data); 
        
          setimg(response.data.message); 
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);

  }, []); 

 
  return (
    <div >
      <h2>Every 2 Seconds Random Image</h2>
      <img src={myimg.message}
      height={300}
      width={300} />  
    </div>
  );
}

export default Ax1;
