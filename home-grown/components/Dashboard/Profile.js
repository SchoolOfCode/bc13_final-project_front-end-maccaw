import React, { useEffect } from "react";
import dashboardStyles from "../../styles/DashboardContainer.module.css";

export default function Profile({ userData }) {
  let ratingString = "";

  function generateRating(rating) {
    for (let i = 0; i < rating; i++) {
      ratingString += "🥕";
    }
  }
  generateRating(userData.rating);

  return (
    <div className={dashboardStyles.profile}>
      <div className={dashboardStyles.profileContainer}>
      <h2 className={dashboardStyles.h2UserDetails}>User Profile</h2>
      <img src={userData["profile_picture"]} className={dashboardStyles.imageProfile} />
      </div>
      <div className="profileInformation">
        <h4 className={dashboardStyles.h4UserInfo}>
          Name: {userData["first_name"]} {userData["last_name"]}
        </h4>
        <h4 className={dashboardStyles.h4UserInfo}>Email: {userData.email}</h4>
        <h4 className={dashboardStyles.h4UserInfo}>Location: {userData.location}</h4>
        <h4 className={dashboardStyles.h4UserInfo}>Rating:{ratingString}</h4>
      </div>
    </div>
  );
}
