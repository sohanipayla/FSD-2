import  { useContext } from 'react';

import { LanguageContext } from './PB387';

function PBChild2387() {
 
  const selectedLanguage = useContext(LanguageContext);

  return (
    <div>
      
      <h1 style={{ color: '#2e7d32' }}>
        {selectedLanguage === "English" ? "Welcome" : "स्वागत है"}
      </h1>
    </div>
  );
}

export default PBChild2387;
