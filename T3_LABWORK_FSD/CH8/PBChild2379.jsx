import  { useContext } from 'react';
import { ColorContext } from './PB379';

function PBChild2379() {

  const colors = useContext(ColorContext);

  return (
    <div >
      <h1 style={{ 
        color: colors.fontColor, 
        backgroundColor: colors.bgColor, 
        padding: '20px', 
        display: 'inline-block',
        borderRadius: '5px'
      }}>
        Full stack Development
      </h1>
    </div>
  );
}

export default PBChild2379;
