import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});  // set initial value for formData
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // log the form data to the console
  };

  const handleChangeName = (e) => {
    setFormData({ ...formData, name:  e.target.value });  // update formData state with the input value
  };

   const handleChangeEmail = (e) => {
       setFormData({ ...formData, email:  e.target.value });  // update formData state with the input value
  };

   const handleChangeMessage = (e) => {
       setFormData({ ...formData, message:  e.target.value });   // update formData state with the input value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChangeName} />
      <input type="text" onChange={handleChangeEmail} />
      <textarea type="text" onChange={handleChangeMessage} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;

