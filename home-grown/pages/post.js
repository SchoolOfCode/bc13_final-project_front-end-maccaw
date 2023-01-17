import { useState, useEffect } from "react";
import styles from "../styles/Posts.module.css";
import { useRouter } from "next/router";
import PostForm from "../components/PostForm/PostForm";
import UserListingCard from "../components/UserListingCard/UserListingCard";
import { useAuth } from "../context/AuthContext";

export default function NewPost() {
  const [userPosts, setUserPosts] = useState([]);
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push("/login");
  }

  async function getPostData() {
    const id = currentUser.uid;
    let token = await currentUser.getIdToken();
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
  useEffect(() => {
    getPostData();
  }, []);

  async function handleDelete(posts_id) {
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
    console.log(filteredUserPosts);
    setUserPosts(filteredUserPosts);
  }

  async function handleEdit() {
    console.log("edit");
  }

  return (
    <div>
      <PostForm></PostForm>
      <div>
        {userPosts.map((userPost, index) => {
          console.log(userPost);
          return (
            <UserListingCard
              key={index}
              userPost={userPost}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></UserListingCard>
          );
        })}
      </div>
    </div>
  );
}
