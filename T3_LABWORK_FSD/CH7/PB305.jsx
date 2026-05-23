// Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from 
// the array and display all remaining digits of the array [3,5,11,4,17,8,21,2,26,13,8]. Pass values 
// as props.

function NumberList({ numbers }) {

  const validNumbers = numbers.filter(num => num < 10);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Filtered Numbers (Less than 10)</h2>
      <ul>
        {validNumbers.map((num, index) => (
          <li key={index} style={{ fontSize: '18px', margin: '5px 0' }}>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PB305() {
  const digitsArray = [3, 5, 11, 4, 17, 8, 21, 2, 26, 13, 8];

  return (
    <div>
      <NumberList numbers={digitsArray} />
    </div>
  );
}
