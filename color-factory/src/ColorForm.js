import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function ColorForm({addColor}) {
  const [formData, setFormData] = useState({name: '', hex: '#ffffff'});
  const history = useHistory();

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(fData => ({
      ...fData,
      [name] : value
    }));
  };


  function handleSubmit(e) {
    e.preventDefault();
    addColor({[formData.name]: formData.hex});
    history.push('/colors');
  }

  const {name, hex} = formData;

  return (
    <div className="ColorForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Name:</label>
        <input 
          name="name"
          id="name"
          placeholder="Enter color name"
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="hex">Color Value:</label>
        <input 
          type="color"
          name="hex"
          id="hex"
          onChange={handleChange}
          value={hex}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ColorForm;