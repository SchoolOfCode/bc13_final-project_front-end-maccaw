import { useState, useEffect } from "react";
import styles from "../styles/Posts.module.css";
import { useRouter } from "next/router";
import PostForm from "../components/PostForm/PostForm";
import UserListingCard from "../components/UserListingCard/UserListingCard";
import { useAuth } from "../context/AuthContext";
import BoilerPlatePopup from "../components/PopUpModal/BoilerPlatePopUp";
import ContactForm from "../components/ContactForm/ContactForm";
export default function NewPost() {
  const [userPosts, setUserPosts] = useState();
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push("/login");
  }

  useEffect(() => {
    getPostData();
  }, []);

  async function getPostData() {
    const id = currentUser.uid;
    let token = await currentUser.getIdToken();
    console.log(token)
    const response = await fetch(
      `https://homegrown-backend.onrender.com/api/homegrown/posts/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    setUserPosts(data.payload);
  }


  async function handleDelete(posts_id) {
    let token = await currentUser.getIdToken();
    await fetch(
      `https://homegrown-backend.onrender.com/api/homegrown/posts/${posts_id}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    let index = 0;
    for (let i = 0; i < userPosts.length; i++) {
      if (userPosts[i].posts_id === posts_id) {
        index = i;
      }
    }
    const filteredUserPosts = [
      ...userPosts.slice(0, index),
      ...userPosts.slice(index + 1),
    ];
    console.log("FILTERED", filteredUserPosts);
    setUserPosts(filteredUserPosts);
  }

 
  if(currentUser && userPosts){
    return (
      <div className={styles["post-page-container"]}>
        {/* <PostForm currentUser = {currentUser}  userPosts={userPosts} setUserPosts={setUserPosts}/> */}
        <div className={styles["header-container"]}>
        <div></div>
          <h2>MY LISTINGS</h2>
          <div className={styles["new-post-icon-container"]}>
          <label>new post:</label>
          <BoilerPlatePopup className={styles["new-post-icon"]} image='icons/create-new-post.png' alt="post new plot, image of pencil hovering over a whiteboard">
            <PostForm userPosts={userPosts} currentUser={currentUser}/>
          </BoilerPlatePopup>
          </div>
        </div>
        <div className={styles["post-container"]}>
          {userPosts.map((userPost, index) => {
            return (
              <UserListingCard
                key={index}
                userPost={userPost}
                handleDelete={handleDelete}
              ></UserListingCard>
            );
          })}
        </div>
      </div>
    );
  }
  else{
    return (<h1>...Loading</h1>)
  }

}
