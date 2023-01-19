import React, { useEffect } from "react";
import styles from "../../styles/DashboardContainer.module.css";

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

       <h1 className={styles["profile-user-name"]}>
       {userData.first_name}'s Patch
       </h1>
     
    <div className={styles["profile-user-info"]}>
       
       <h4> Name: {userData["first_name"]} 
       {userData["last_name"]}</h4>
       <h4>Email: {userData.email}</h4>
       <h4>Location: {userData.location}</h4>
       <h4 >Rating:{ratingString}</h4>

    </div>
    </div>
   
  );
}
