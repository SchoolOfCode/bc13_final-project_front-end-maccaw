import React, { useState, useRef } from "react";
import styles from "../../styles/PopUp.module.css";
import emailjs from "@emailjs/browser";

function ContactForm({ user_email, handleClose }) {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lk964d9",
        "template_wihibg1",
        form.current,
        "HqdFPmItO18OkTBUg"
      )
      .then(
        (result) => {
          console.log(result.text);
          // text is email is sent succsefully?
        },
        (error) => {
          console.log(error.text);
          //text if email cant be sent
        }
      );

      setSuccess(true)
        form.current.reset()
      setTimeout(TimerHandler, 2000)
  };

  function TimerHandler(){
    setSuccess(false)
  }


  return (
    <div>
      <form
        ref={form}
        className={styles["form-container"]}
        onSubmit={handleSubmit}
      >
        <label>Name:</label>
        <input type="text" name="name" />
        <input hidden="true" type="text" name="email" value={user_email} />
        <label>Email:</label>
        <input type="text" name="sender_email" />
        <label>Message:</label>
        <textarea type="text" name="message" />
        <button type="submit">Submit</button>
      </form>
      <p hidden={!success}>Email Successfully Sent</p>
    </div>
  );
}

export default ContactForm;
