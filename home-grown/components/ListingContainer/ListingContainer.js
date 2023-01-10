import { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard";
import styles from "../../styles/ListingContainer.module.css";

function ListingContainer() {
  //fetch data from api
  //save the data in a state
  //map each entry of the array (in state) to a card
  // add search bar
  //create dropdown to search by location and onClick

  //key data for cards = username, location, croptype, plotsize, description, user image, rating
  useEffect(() => {
    getPostData();
  },[]);

  const [posts, setPosts] = useState(null);

  async function getPostData() {
    const response = await fetch(
      "http://localhost:3000/api/staticdata_all_tables_joined"
    );

    const data = await response.json();

    setPosts(data);
    console.log(data);
  }

  if (!posts) {
    return <div>...Loading</div>;
  } else {
    return (
      <div className={styles["card-container"]}>
        {posts.map((element) => (
          <div className={styles.card}>
            <ListingCard profile_picture={element.profile_picture} rating={element.rating} username={element.username} location={element.location} crop_type={element.crop_type} plot_size={element.plot_size} description={element.description} />
          </div>
        ))}
      </div>
    );
  }
}

export default ListingContainer;
