import  { useState, createContext } from 'react';
import PBChild1381 from './PBChild1381';
 const FormContext = createContext();

function PB381() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: '',
    city: '',
    gender: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <FormContext.Provider value={submittedData}>
      <div> 
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name: </label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div>
            <label>Last Name: </label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div>
            <label>Message: </label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>

          <div>
            <label>City: </label>
            <select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">--Select City--</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>

          <div>
            <label>Gender: </label>
            <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
            <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required /> Female
          </div>

          <button type="submit">
            Submit Form
          </button>
        </form>
        
        <hr />
        <PBChild1381 />
      </div>
    </FormContext.Provider>
  );
}

export default PB381;
export {FormContext}