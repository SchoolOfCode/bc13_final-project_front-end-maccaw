import { useState, useRef } from "react";
import styles from "../../styles/Posts.module.css";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
// needs to contain relevant info for user
// title
// date posted - stretch
// percentage of plot used by listing
//crops
// description

// needs edit functionality
// needs delete functionality
//

export default function UserListingCard({ userPost, handleDelete }) {
  const {
    profile_picture,
    title,
    rating,
    username,
    location,
    crop_name,
    crop_id,
    percentage_of_plot,
    description,
    posts_id,
  } = userPost;
  const router = useRouter();
  const { currentUser } = useAuth();
  const [edit, setEdit] = useState(false);
  const newTitle = useRef();
  const newDescription = useRef();
  const newCrop = useRef();
  const newPercentage = useRef();

  async function handleEdit() {
    setEdit(!edit);
  }

  async function handleSave() {
    let patchData = {
      title: newTitle.current.value,
      description: newDescription.current.value,
      crop_id: Number(newCrop.current.value),
      percentage_of_plot: Number(percentage_of_plot),
    };

    console.log("PATCH DATA", patchData);
    console.log("POST ID", posts_id);
    let token = await currentUser.getIdToken();
    await fetch(
      `https://homegrown-backend.onrender.com/api/homegrown/posts/${posts_id}`,
      {
        method: "PATCH",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(patchData),
      }
    );
    router.reload(window.location.pathname);
  }

  return (
    <div className={styles["one-card"]}>
      {/* <div className={styles["user-info"]}></div> */}
      <div className={styles["post-card-header"]}>
        <h3 hidden={edit}>{title}</h3>
        <label hidden={!edit}>Title:</label>
        <input
          ref={newTitle}
          hidden={!edit}
          type="text"
          defaultValue={title}
        ></input>
        {edit ? (
          <div className={styles["post-card-buttons"]}>
            <img
              src="https://www.pngfind.com/pngs/m/220-2201567_png-file-save-icon-vector-png-transparent-png.png"
              alt="save button"
              className={styles["user-post-icon"]}
              onClick={handleSave}
            ></img>
            <img
              src="https://w7.pngwing.com/pngs/52/84/png-transparent-no-symbol-icon-cancel-s-angle-text-symmetry-thumbnail.png"
              alt="cancel button"
              className={styles["user-post-icon"]}
              onClick={handleEdit}
            ></img>
          </div>
        ) : (
          <div className={styles["post-card-buttons"]}>
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
        )}
      </div>
      <div className={styles["post-info"]}>
        <div className={styles["location-crop-plot-banner"]}>
          <p>Location: {location}</p>
          <p hidden={edit}>Crop: {crop_name}</p>

          <select
            hidden={!edit}
            name="crop"
            required
            ref={newCrop}
            defaultValue={crop_id}
          >
            <option value="1">White Potatoes</option>
            <option value="2">Carrots</option>
            <option value="3">White Mushrooms</option>
            <option value="4">White Onions</option>
            <option value="5">Tomatoes</option>
            <option value="6">Lettuce</option>
            <option value="7">Courgettes</option>
            <option value="8">Blackberries</option>
            <option value="9">Strawberries</option>
            <option value="10">Raspberries</option>
          </select>
          <p>Plot % used: {percentage_of_plot} </p>
        </div>
        <div className={styles["post-card-description"]}>
          <p hidden={edit}>Description: {description}</p>
          <input
            ref={newDescription}
            hidden={!edit}
            type="text"
            defaultValue={description}
          ></input>
        </div>
      </div>
    </div>
  );
}

//key data for cards = username, location, croptype, plotsize, description, user image, rating
