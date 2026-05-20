function MF2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    return (
      <div>
        <h1>Multiplication Table</h1>
        {numbers.map((num, index) => (
          <div key={index}>
            <h2>Number: {num * 5}</h2>
          </div>
        ))}
      </div>
    );
  }
  
  export default MF2;
  