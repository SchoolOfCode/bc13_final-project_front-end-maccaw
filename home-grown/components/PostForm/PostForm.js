import react, { useState, useRef } from "react";
import styles from "../../styles/Posts.module.css";
import { useRouter } from "next/router";

export default function PostForm({
  currentUser,
  userPosts,
  userPlotData,
  handleClose,
}) {
  console.log(userPosts, "userPosts");
  const title = useRef();
  const postcode = useRef();
  const crop = useRef();
  const percentage = useRef();
  const description = useRef();
  const date = useRef();
  const form = useRef();
  const router = useRouter();
  console.log(userPlotData, "plot");
  async function onClick(e) {
    e.preventDefault();

    let postData = {
      plot_id: Number(userPlotData[0].plot_id),
      firebase_id: currentUser.uid,
      title: title.current.value,
      crop_id: Number(crop.current.value),
      date: date.current.value,
      percentage_of_plot: Number(percentage.current.value),
      description: description.current.value,
    };

    let token = await currentUser.getIdToken();
    await fetch("https://homegrown-backend.onrender.com/api/homegrown/posts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(postData),
    });
    router.reload(window.location.pathname);
  }

  let percentageTotal = 0;
  for (let i = 0; i < userPosts.length; i++) {
    percentageTotal += Number(userPosts[i].percentage_of_plot);
  }

  let percentageLeft = 1 - percentageTotal;
  let percentageArray = [];
  let percent = 0;

  while (percent <= percentageLeft) {
    percentageArray.push(Math.round(percent * 10) / 10);
    percent += 0.1;
  }
  console.log("%", percentageArray);

  if (userPlotData && currentUser) {
    return (
      <div className={styles["form-container"]}>
        <div className={styles["form-title-banner"]}>
          <div></div>
          <h2 className={styles["newPost-title"]}>NEW LISTING</h2>
          <img
            className={styles["close-icon"]}
            src="/illustrations/close-icon.png"
            alt="cross for closing pop up"
            onClick={handleClose}
          />
        </div>
        <div className={styles["form"]}>
          {/* <img className="newPostImage" src={newPost} alt="logo" /> */}

          <form className={styles["real-form"]} ref={form}>
            <div className={styles["title"]}>
              <label className={styles.label}> Post Title: </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Post Title"
                maxLength="75"
                required
                ref={title}
              />
            </div>
            <div className={styles["date-postcode-container"]}>
              <div className={styles["postcode"]}>
                <label className={styles.label}> Postcode: </label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Postcode"
                  maxLength="8"
                  required
                  value={userPlotData[0].location}
                  ref={postcode}
                />
              </div>
              <div className={styles["date"]}>
                <label className={styles.label}>Date</label>
                <input
                  className={styles.input}
                  type="text"
                  value={new Intl.DateTimeFormat("en-US").format(new Date())}
                  ref={date}
                />
              </div>
            </div>
            <div className={styles["crop-percentage-container"]}>
              <div className={styles["crop"]}>
                <label className={styles.label}> Crop: </label>
                <select
                  className={styles.input}
                  name="crop"
                  required
                  ref={crop}
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
              </div>
              <div className={styles["percentage"]}>
                <label className={styles.label}> % of plot: </label>
                <select
                  className={styles.input}
                  name="percentage of plot"
                  required
                  ref={percentage}
                >
                  {percentageArray.map((element) => (
                    <option value={element}>{element * 100}%</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles["description"]}>
              <label className={styles.label}> Describe your project: </label>
              <textarea
                className={styles["input-textarea"]}
                placeholder="Description..."
                maxLength="200"
                required
                ref={description}
              ></textarea>
            </div>
            <button className={styles.button} onClick={onClick}>
              Create Post
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <h1>...loading</h1>;
  }
}
