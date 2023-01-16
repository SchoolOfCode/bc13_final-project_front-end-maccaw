import react, { useState } from "react";
import styles from "../../styles/NewPost.module.css";

export default function PostForm() {
  // post title
  // location (postcode)
  // crop
  // description
  // combines in the listing with user profile info - picture, rating, username etc...
  // list of current posts below the form
  const [payload, setPayload] = useState({
    title: null,
    postcode: null,
    crop: null,
    percentage_of_plot: null,
    description: null,
  });

  function onChangeTitle(e) {
    let text = e.target.value;
    setPayload({ ...payload, title: text });
  }
  function onChangeDes(e) {
    let text = e.target.value;
    setPayload({ ...payload, description: text });
  }
  function onChangePostcode(e) {
    let text = e.target.value;
    setPayload({ ...payload, postcode: text });
  }
  function onChangeCrop(e) {
    let text = e.target.value;
    setPayload({ ...payload, crop: text });
  }
  function onChangeSize(e) {
    let text = e.target.value;
    setPayload({ ...payload, percentage_of_plot: text });
  }

  async function onClick(e) {
    e.preventDefault();
    let obj = {
      title: payload.title,
      postcode: payload.postcode,
      description: payload.description,
      percentage_of_plot: payload.percentage_of_plot,
      crop: payload.crop,
    };
    console.log("button clicked", obj);
    // await fetch("http://localhost:3001/api/post", {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(obj),
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log(JSON.stringify(response)));
  }
  function clearInput() {}
  return (
    <div className={styles.newPost}>
      <h2 className={styles["newPost-title"]}>Create a new post...</h2>

      <div className={styles["newPost-container"]}>
        {/* <img className="newPostImage" src={newPost} alt="logo" /> */}

        <form onSubmit={clearInput}>
          <label> Post Title: </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Post Title"
            maxLength="75"
            required
            onChange={onChangeTitle}
          />

          <label> Postcode: </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Postcode"
            maxLength="8"
            required
            onChange={onChangePostcode}
          />

          <label> Crop: </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Crop"
            maxLength="20"
            required
            onChange={onChangeCrop}
          />

          <label> Percentage of Plot to be used: </label>
          <select
            className={styles.input}
            name="percentage of plot"
            required
            onChange={onChangeSize}
          >
            <option value="25%">25%</option>
            <option value="50%">50%</option>
            <option value="75%">75%</option>
            <option value="100%">100%</option>
          </select>

          <label> Describe your project: </label>
          <textarea
            className={styles.textarea}
            placeholder="Description..."
            maxLength="200"
            required
            onChange={onChangeDes}
          ></textarea>

          <button className={styles.button} onClick={onClick}>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}
