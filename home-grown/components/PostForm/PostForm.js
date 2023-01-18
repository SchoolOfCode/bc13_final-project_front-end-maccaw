import react, { useState, useRef } from "react";
import styles from "../../styles/Posts.module.css";
import { useRouter } from 'next/router'

export default function PostForm({currentUser, userPosts, setUserPosts}) {
  const title = useRef();
  const postcode = useRef();
  const crop = useRef();
  const percentage = useRef();
  const description = useRef();
  const date = useRef();
  const form=useRef()
  const router = useRouter()

  async function onClick(e) {
    e.preventDefault();

    let postData = {
      plot_id: Number(userPosts[0].plot_id),
      firebase_id: currentUser.uid,
      title: title.current.value,
      crop_id: Number(crop.current.value),
      date: date.current.value,
      percentage_of_plot: Number(percentage.current.value),
      description: description.current.value,
    }; 

   

    let token = await currentUser.getIdToken();
    await fetch('https://homegrown-backend.onrender.com/api/homegrown/posts', {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(
        postData
        ),
      })
      router.reload(window.location.pathname)


  }

let percentageTotal = 0
for(let i= 0; i<userPosts.length; i++){
  percentageTotal += Number(userPosts[i].percentage_of_plot)
}

let percentageLeft= 1-percentageTotal
let percentageArray = []
let percent = 0

while(percent<=percentageLeft){
  percentageArray.push(Math.round(percent*10)/10)
  percent+= 0.1
}


if(userPosts && currentUser){
  return (
    <div className={styles.newPost}>
      <h2 className={styles["newPost-title"]}>Create a new post...</h2>

      <div className={styles["newPost-container"]}>
        {/* <img className="newPostImage" src={newPost} alt="logo" /> */}

        <form ref={form}>
          <label> Post Title: </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Post Title"
            maxLength="75"
            required
            ref={title}
          />

          <label> Postcode: </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Postcode"
            maxLength="8"
            required
            value={userPosts[0].location}
            ref={postcode}
          />

          <label> Crop: </label>
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

          <label>Date</label>
          <input    className={styles.input} type="text" value={new Intl.DateTimeFormat('en-US').format(new Date())} ref={date}/>

          <label> Percentage of Plot to be used: </label>
          <select
            className={styles.input}
            name="percentage of plot"
            required
            ref={percentage}
          >
           {percentageArray.map((element)=> <option value={element}>{element*100}%</option>)}
          </select>

          <label> Describe your project: </label>
          <textarea
            className={styles.textarea}
            placeholder="Description..."
            maxLength="200"
            required
            ref={description}
          ></textarea>

          <button className={styles.button} onClick={onClick}>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
} else{
  return <h1>...loading</h1>
}
  
}
