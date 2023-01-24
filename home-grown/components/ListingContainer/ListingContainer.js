import { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard";
import styles from "../../styles/ListingContainer.module.css";
import Loader from "../Loader/Loader"

function ListingContainer({ search, posts, showEmailToast }) {
  //fetch data from api
  //save the data in a state
  //map each entry of the array (in state) to a card
  // add search ba
  //create dropdown to search by location and onClick

  //key data for cards = username, location, croptype, plotsize, description, user image, rating

  if (!posts) {
    return <Loader/>;
  } else {
    return (
      <div className={styles["card-container"]}>
        {posts.map((element) => (
          <ListingCard
            key={element.posts_id}
            user_email={element.email}
            profile_picture={element.profile_picture}
            title={element.title}
            rating={element.rating}
            username={element.username}
            location={element.location}
            crop_name={element.crop_name}
            description={element.description}
            showEmailToast={showEmailToast}
          />
        ))}
      </div>
    );
  }
}

export default ListingContainer;
