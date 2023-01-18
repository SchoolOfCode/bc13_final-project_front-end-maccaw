import styles from "../../styles/Posts.module.css";

// needs to contain relevant info for user
// title
// date posted - stretch
// percentage of plot used by listing
//crops
// description

// needs edit functionality
// needs delete functionality
//

export default function UserListingCard({
  userPost,
  handleDelete,
  handleEdit,
}) {
  const {
    profile_picture,
    title,
    rating,
    username,
    location,
    crop_name,
    percentage_of_plot,
    description,
    posts_id,
  } = userPost;



  return (
    <div className={styles["one-card"]}>
      <div className={styles["user-info"]}></div>
      <div className={styles["post-info"]}>
        <h3>{title}</h3>

        <p>Location: {location}</p>
        <p>Crop: {crop_name}</p>
        <p>Description: {description}</p>
        <p>Plot % used: {percentage_of_plot} </p>
      </div>
      <img
        src="/icons/icons8-edit-26.png"
        alt="edit button"
        className={styles["user-post-icon"]}
        onClick={handleEdit}
      ></img>
      <img
        src="/icons/icons8-composting-64.png"
        alt="delete button"
        className={styles["user-post-icon"]}
        onClick={() => {
          handleDelete(posts_id);
        }}
      ></img>
    </div>
  );
}

//key data for cards = username, location, croptype, plotsize, description, user image, rating
