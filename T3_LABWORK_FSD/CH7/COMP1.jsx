// write a react code to render a componants with the following data 1) a heading in italics blue color and font size 25px
// 2)an ordered list of 3 flowers that start with the latter capital A list should be red bg color
function COMP1() {
    const headingStyle = {
      fontStyle: "italic",
      color: "blue",
      fontSize: "25px"
    };
  
    const listStyle = {
      backgroundColor: "red"
    };
  
    return (
      <>
        <h1 style={headingStyle}>Beautiful Flowers</h1>
  
        <ol type="A" style={listStyle}>
          <li>Rose</li>
          <li>Lily</li>
          <li>Lotus</li>
        </ol>
      </>
    );
}
  
export default COMP1;
