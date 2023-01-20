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
    <div className={styles["form-container"]}>
    <div className={styles["header-container"]}>
    <div></div> <h2 className={styles.heading}>Contact Form</h2> <img onClick={handleClose} className={styles["close-icon"]}src="/illustrations/close-icon.png"/></div>
   
      <form
        ref={form}
        className={styles["form"]}
        onSubmit={handleSubmit}
      >
        <label className={styles["label"]}>Name:</label>
        <input className={styles["input"]} type="text" name="name" />
        <input hidden="true" type="text" name="email" value={user_email} />
        <label className={styles["label"]}>Email:</label>
        <input className={styles["input"]} type="text" name="sender_email" />
        <label className={styles["label"]}>Message:</label>
        <textarea className={styles["input-textarea"]}  type="text" name="message" />
        <button  className={styles.button}type="submit">Submit</button>
      </form>
   
      <p hidden={!success}>Email Successfully Sent</p>
    </div>
  );
}

export default ContactForm;
