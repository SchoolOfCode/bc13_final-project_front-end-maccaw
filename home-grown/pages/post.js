import { useState, useEffect } from "react";
import styles from "../styles/Posts.module.css";
import { useRouter } from "next/router";
import PostForm from "../components/PostForm/PostForm";
import UserListingCard from "../components/UserListingCard/UserListingCard";
import { useAuth } from "../context/AuthContext";
import BoilerPlatePopup from "../components/PopUpModal/BoilerPlatePopUp";
import ContactForm from "../components/ContactForm/ContactForm";
import Loader from "../components/Loader/Loader";

export default function NewPost() {
  const [userPosts, setUserPosts] = useState(null);
  const [userPlotData, setUserPlotData] = useState(null);
  const { currentUser } = useAuth();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!currentUser) {
    router.push("/login");
  }

  useEffect(() => {
    getPostData();
    getUserPlot();
  }, []);

  async function getUserPlot() {
    const id = currentUser.uid;
    let token = await currentUser.getIdToken();
    const response = await fetch(`${backendURL}/api/homegrown/users/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setUserPlotData(data.payload);
  }
  async function getPostData() {
    const id = currentUser.uid;
    let token = await currentUser.getIdToken();
    const response = await fetch(`${backendURL}/api/homegrown/posts/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setUserPosts(data.payload);
  }

  async function handleDelete(posts_id) {
    let token = await currentUser.getIdToken();
    await fetch(`${backendURL}/api/homegrown/posts/${posts_id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
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

  if (currentUser && userPosts) {
    return (
      <div className={styles["post-page-container"]}>
        {/* <PostForm currentUser = {currentUser}  userPosts={userPosts} setUserPosts={setUserPosts}/> */}
        <p className={styles["post-page-description"]}>
          Welcome to your listings page. Here you can add a new post, amend an
          existing post, or delete a current post.
        </p>
        <div className={styles["header-container"]}>
          <div></div>
          <h2>MY LISTINGS</h2>
          <div className={styles["new-post-icon-container"]}>
            <label>new post:</label>

            <BoilerPlatePopup
              className={styles["new-post-icon"]}
              image="icons/create-new-post.png"
              alt="post new plot, image of pencil hovering over a whiteboard"
              handleShow={handleShow}
              handleClose={handleClose}
              show={show}
            >
              <PostForm
                userPosts={userPosts}
                userPlotData={userPlotData}
                currentUser={currentUser}
                handleClose={handleClose}
                show={show}
              />
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
  } else {
    return <Loader />;
  }
}
