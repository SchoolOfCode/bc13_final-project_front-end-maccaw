import React, { useEffect } from "react";
import styles from "../../styles/DashboardContainer.module.css";
import Link from 'next/link';

export default function Profile({ userData }) {
  let ratingString = "";

  function generateRating(rating) {
    for (let i = 0; i < rating; i++) {
      ratingString += "🥕";
    }
  }
  generateRating(userData.rating);

  return (
    <div className={styles["profile-container"]}>
       <div className={styles["profile-user-name"]}>
       <h1> {userData.first_name}'s Plot </h1>
       </div>
       <div className={styles["profile-user-info"]}>
       <h4> First Name:  {userData["first_name"]}</h4>
       <h4> Last Name:  {userData["last_name"]}</h4>
       <h4>Email: {userData.email}</h4>
       <h4>Location: {userData.location}</h4>
       <h4 >User Rating: {ratingString}</h4>
       </div>
    </div>
  );
}






