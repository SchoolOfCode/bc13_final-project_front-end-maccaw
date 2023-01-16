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
  user_email
}) {
  return (
    <div className={styles["one-card"]}>
        {/* <h3>{title}</h3> */}
      <div className={styles["user-info"]}>
        <img className={styles["profile-img"]} src={profile_picture} alt="profile" />
        <p>{username}</p>
        <p>{rating}</p>
      </div>
        <div className={styles["post-info"]}>
          <h3>{title}</h3>

          <p>Location:{location}</p>
          <p>Crop:{crop_name}</p>
          <p>Description: {description}</p>
        </div>
    <MyPopup user_email={user_email}/>
    </div>
  );
}

export default ListingCard;

//key data for cards = username, location, croptype, plotsize, description, user image, rating
