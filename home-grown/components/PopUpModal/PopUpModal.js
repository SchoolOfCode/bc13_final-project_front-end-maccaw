import React, { useState } from "react";
import styles from "../../styles/PopUp.module.css";
import ContactForm from "../ContactForm/ContactForm";

function MyPopup({ user_email, showEmailToast }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        src="/icons/email-form-icon.png"
        onClick={handleShow}
        className={styles["pop-up-icon"]}
      />
      {show && (
        <div className={styles["pop-up-background"]}>
          <div className={styles["pop-up"]}>
            <ContactForm
              handleClose={handleClose}
              user_email={user_email}
              showEmailToast={showEmailToast}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MyPopup;
