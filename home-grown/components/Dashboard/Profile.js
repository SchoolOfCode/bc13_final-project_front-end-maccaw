import React, { useEffect } from "react";

export default function Profile({ userData }) {
  let ratingString = "";

  function generateRating(rating) {
    while (ratingString.length !== rating) {
      ratingString += "🥕";
    }
  }
  generateRating(userData.rating);

  return (
    <div>
      <h2>User Profile</h2>
      <h4>Rating:{ratingString}</h4>

      <img src={userData["profile_picture"]} />
      <h4>
        Name: {userData["first_name"]} {userData["last_name"]}
      </h4>
      <h4>Email: {userData.email}</h4>
      <h4>Location: {userData.location}</h4>
    </div>
  );
}
