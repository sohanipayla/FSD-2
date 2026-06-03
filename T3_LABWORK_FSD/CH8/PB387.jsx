import  { useState, createContext } from 'react';
import PBChild1387 from './PBChild1387';


 const LanguageContext = createContext();

function PB387() {
 
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "English" ? "Hindi" : "English"));
  };
  return (

    <LanguageContext.Provider value={language}>
      <div>
        <p>Current Language: <strong>{language}</strong></p>
        <button onClick={toggleLanguage} >
          Change Language (Toggle)
        </button>
        <hr />
        <PBChild1387 />
      </div>
    </LanguageContext.Provider>
  );
}

export default PB387;
export {LanguageContext}