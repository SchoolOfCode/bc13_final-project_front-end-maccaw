import React, { useState } from "react";
import styles from "../../styles/PopUp.module.css";

function BoilerPlatePopup({image, alt, children, className}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        src={image}
        alt={alt}
        onClick={handleShow}
        className={className}
      />
      {show && (
        <div className={styles["pop-up-background"]}>
          <div className={styles["pop-up"]}>
           {children}
           <button onClick={handleClose}>close</button>
          </div>
       

        </div>
      )}
    </>
  );
}

export default BoilerPlatePopup;