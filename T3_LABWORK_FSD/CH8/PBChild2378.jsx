import  { useContext } from 'react';
import { ColorContext } from './PB378';

function PBChild2378() {
  const colors = useContext(ColorContext);

  return (
    <div >
      <div style={{ 
        backgroundColor: colors.backgroundColor, 
        color: colors.fontColor, 
        padding: '20px', 
        display: 'inline-block',
        borderRadius: '5px'
      }}>
        <h1>Welcome to LJU</h1>
      </div>
    </div>
  );
}

export default PBChild2378;
