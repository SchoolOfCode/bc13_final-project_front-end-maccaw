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
}) {
  let ratingString = "";

  function generateRating(rating) {
    for (let i = 0; i < rating; i++) {
      ratingString += "🥕";
    }
  }
  generateRating(rating);

  return (
    <div className={styles["one-card"]}>
      <div className={styles["user-info"]}>
        <img
          className={styles["profile-img"]}
          src={profile_picture}
          alt="profile"
        />
        <p>{username}</p>
        <p>{ratingString}</p>
      </div>
      <div className={styles["post-info"]}>
        <h3>{title}</h3>
        <div className={styles["location-crop"]}>
          <p className={styles["location-key-value"]}>
            <span className={styles.key}>Location:</span>
            {location}
          </p>
          <p className={styles["location-key-value"]}>
            <span className={styles.key}>Crop:</span>
            {crop_name}
          </p>
        </div>
        <p className={styles.description}>Description: {description}</p>
      </div>
      <MyPopup user_email={user_email} />
    </div>
  );
}

export default ListingCard;

//key data for cards = username, location, croptype, plotsize, description, user image, rating
