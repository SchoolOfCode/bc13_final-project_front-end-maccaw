import { useState } from "react";
import styles from "../../styles/ListingContainer.module.css";
import MyPopup from "../PopUpModal/PopUpModal";

function ListingCard({
  profile_picture,
  title,
  rating,
  username,
  location,
  crop_name,
  plot_size,
  description,
  user_email,
  showEmailToast,
}) {
  const [cardGrow, setCardGrow] = useState(false);
  let ratingString = "";

  function generateRating(rating) {
    for (let i = 0; i < rating; i++) {
      ratingString += "🥕";
    }
  }
  generateRating(rating);

  function handleCardGrow() {
    setCardGrow(!cardGrow);
  }

  const postCode = location.split(" ");
  return (
    <div
      className={cardGrow ? styles["one-card-grow"] : styles["one-card"]}
      onClick={handleCardGrow}
    >
      <div className={styles["user-info"]}>
        <img
          className={styles["profile-img"]}
          src={profile_picture}
          alt="profile"
        />
        <p className={styles.username}>{username}</p>
        <p>{ratingString}</p>
      </div>
      <div className={styles["post-info"]}>
        <h3 className={cardGrow ? styles["title-grow"] : styles.title}>
          {title}
        </h3>
        <div className={styles["location-crop"]}>
          <p className={styles["location-key-value"]}>
            <span className={styles.key}>Location:</span>
            {postCode[0]}
          </p>
          <p className={styles["location-key-value"]}>
            <span className={styles.key}>Crop:</span>
            {crop_name}
          </p>
        </div>
        <p
          className={cardGrow ? styles["description-grow"] : styles.description}
        >
          Description: {description}
        </p>
        <div className={styles["message-container"]}>
          Message:{" "}
          <MyPopup user_email={user_email} showEmailToast={showEmailToast} />
        </div>
      </div>
    </div>
  );
}

export default ListingCard;

//key data for cards = username, location, croptype, plotsize, description, user image, rating
