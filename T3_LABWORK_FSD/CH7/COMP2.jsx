// write react code to render a component with the following data a paragraph with green color font size 30px and bold in
//  style use external css for this paragraph 2) render and image hero.png given in assets folder 3) the current time 
//  and current date in pink color and alignment should be center filename : COMP2
import heroImage from './assets/hero.png';
import './comp2.css'; 

function COMP2() {
  const todayDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <>
      <p className="heroParagraph">
        Welcome to our specialized React component assignment page.
      </p>

      <img src={heroImage} alt="Hero Banner" className="heroImage" />

      <div className="dateTimeCenter">
        <h2>Current Date: {todayDate}</h2>
        <h2>Current Time: {currentTime}</h2>
      </div>
    </>
  );
}

export default COMP2;
