function MF3() {
    // 1 to 10 numbers array
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    return (
      <div>
        <h1>Even Numbers List</h1>
        <h2>
          {numbers.filter(num => num % 2 == 0).join(", ")}
        </h2>
      </div>
    );
}
  
export default MF3;
