import React, { useState, useRef } from "react";
import styles from '../../styles/PopUp.module.css'
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});  // set initial value for formData
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // log the form data to the console

// new code
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_lk964d9', 'template_5ygwhnh', form.current, 'HqdFPmItO18OkTBUg')
        .then((result) => {
            console.log(result.text);
            // text is email is sent succsefully?
        }, (error) => {
            console.log(error.text);
            //text if email cant be sent 
        });
        e.target.reset()
      };
  };
// new code

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
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" onChange={handleChangeName} />
      <label>Email:</label>
      <input type="text" onChange={handleChangeEmail} />
      <label>Message:</label>
      <textarea type="text" onChange={handleChangeMessage} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
