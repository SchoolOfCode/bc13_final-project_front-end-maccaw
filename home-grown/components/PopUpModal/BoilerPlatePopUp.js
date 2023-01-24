import React, { useState } from "react";
import styles from "../../styles/PopUp.module.css";

function BoilerPlatePopup({
  image,
  alt,
  children,
  className,
  handleShow,
  handleClose,
  show,
}) {
  return (
    <>
      <img src={image} alt={alt} onClick={handleShow} className={className} />
      {show && (
        <div className={styles["pop-up-background"]}>
          <div className={styles["pop-up"]}>{children}</div>
        </div>
      )}
    </>
  );
}

export default BoilerPlatePopup;
