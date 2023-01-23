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
      <h4>Location: {userData.location}</h4>
       <h4 >Rating: {ratingString}</h4>

      <div className={styles["title-buttons-container"]}>
       
      <Link href="/post"> 
      <button className={styles["title-myListings-button"]}> My Listings</button>
      </Link>

      <a href="https://gmail.com">
      <button className={styles["title-myMessages-button"]}> My Messages</button>
      </a>

    </div>
         
    

    </div>
   
   
  );
}



/* 
       <div className={styles["profile-user-info"]}>
       <h4> Name:  {userData["first_name"]} 
       {userData["last_name"]}</h4>
       <h4>Email: {userData.email}</h4>
       <h4>Location: {userData.location}</h4>
       <h4 >Rating: {ratingString}</h4>
       </div>

*/