import styles from "../../styles/ListingContainer.module.css";

// needs to contain relevant info for user
// title
// date posted - stretch
// percentage of plot used by listing
//crops
// description

// needs edit functionality
// needs delete functionality
//

export default function UserListingCard({ userPost }) {
  const {
    profile_picture,
    title,
    rating,
    username,
    location,
    crop_name,
    percentage_of_plot,
    description,
  } = userPost;
  return (
    <div className={styles["one-card"]}>
      {/* <h3>{title}</h3> */}
      <div className={styles["user-info"]}>
        <img
          className={styles["profile-img"]}
          src={profile_picture}
          alt="profile"
        />
        <p>{username}</p>
        <p>{rating}</p>
      </div>
      <div className={styles["post-info"]}>
        <h3>{title}</h3>

        <p>Location:{location}</p>
        <p>Crop:{crop_name}</p>
        <p>Description: {description}</p>
        <p>Percentage of Plot used: {percentage_of_plot} </p>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

//key data for cards = username, location, croptype, plotsize, description, user image, rating
