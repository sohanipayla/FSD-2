import  { useContext, useEffect } from 'react';

import { FormContext } from './PB381';

function PBChild2381() {
 
  const data = useContext(FormContext);

  useEffect(() => {
    if (data) {
      alert(
        `--- Submitted Form Values ---\n\n` +
        `First Name: ${data.firstName}\n` +
        `Last Name: ${data.lastName}\n` +
        `Message: ${data.message}\n` +
        `City: ${data.city}\n` +
        `Gender: ${data.gender}`
      );
    }
  }, [data]);

  return (
    <div>
     
      {data ? (
        <p style={{ color: 'green' }}> Form data received! Check the alert box.</p>
      ) : (
        <p style={{ color: 'orange' }}> Please fill the form and click submit.</p>
      )}
    </div>
  );
}

export default PBChild2381;
