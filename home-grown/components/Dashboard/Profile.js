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
      <h2>User Profile</h2>

      <img src={userData["profile_picture"]} />
      <h4>
        Name: {userData["first_name"]} {userData["last_name"]}
      </h4>
      <h4>Email: {userData.email}</h4>
      <h4>Location: {userData.location}</h4>
      <h4>Rating:{ratingString}</h4>
    </div>
  );
}
