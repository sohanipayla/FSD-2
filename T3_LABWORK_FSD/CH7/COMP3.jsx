import heroImage from './assets/hero.png';
import './comp2.css'; 

function COMP3() {
  const todayDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const n="lju"
  return (
    <>
      <h1>{n}</h1>
      <h1>"{n}"</h1>
      <h1>{"{n}"}</h1>
      <h1>{'{n}'}</h1>
      <h1>{"n"}</h1>
      <h1>{n+"test"}</h1>
      <h1>{n.toUpperCase()}</h1>
      <h1>{5+5}</h1>
      <h1>{[1,2,3]}</h1>
      <h1>{[1,2,3].join(",")}</h1>
    </>
  );
}

export default COMP3;