import React, { useState } from "react";
import styles from "../../../styles/CreatePlotForm.module.css";

export default function CreatePlotForm({ setShow }) {
  const [plotSize, setPlotSize] = useState(null);
  const [plotPostcode, setPlotPostcode] = useState(null);
  const [plotImageUrl, setPlotImageUrl] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
    console.log(plotImageUrl, plotPostcode, plotSize);
  }
  return (
    <div className={styles["form-container"]}>
      <div className={styles["header-container"]}>
        <div></div> <h2 className={styles.heading}>Contact Form</h2>{" "}
        <img
          onClick={() => {
            setShow();
          }}
          className={styles["close-icon"]}
          src="/illustrations/close-icon.png"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label>Plot Size:</label>
        <input
          type="number"
          placeholder="Enter the size of your plot in m2"
          onChange={(e) => {
            setPlotSize(e.target.value);
          }}
        />
        <label>Add the postcode of your plot:</label>
        <input
          placeholder="Enter your postcode"
          onChange={(e) => {
            setPlotPostcode(e.target.value);
          }}
        />
        <label>Add a photo of your plot</label>
        <input
          placeholder="Enter your image URL"
          onChange={(e) => {
            setPlotImageUrl(e.target.value);
          }}
        />
        <button type="submit">Add plot!</button>
      </form>
    </div>
  );
}
