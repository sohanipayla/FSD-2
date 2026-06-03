import  { useContext } from 'react';
import { UserContext } from './PB367'; 

function PBChild2367() {
  const name = useContext(UserContext);

  return (
    <div >
      <h1 style={{ color: 'blue' }}>
        Username: {name}
      </h1>
    </div>
  );
}

export default PBChild2367;
