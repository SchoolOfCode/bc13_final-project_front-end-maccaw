import React, { useState } from 'react'
import styles from '../../styles/PopUp.module.css'
import ContactForm from '../ContactForm/contactForm'
function MyPopup() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button onClick={handleShow}>Open Popup</button>
      { show && (
        <div className={styles["pop-up-background"]}>
        <div className={styles["pop-up"]}>
         
        <ContactForm />
            <button onClick={handleClose}>Close</button>
          </div>
          </div>
      )}
    </> 
    )
}

export default MyPopup;