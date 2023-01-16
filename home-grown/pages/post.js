import { useState, useEffect } from "react";
import styles from "../styles/NewPost.module.css";
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
    const response = await fetch(
      `https://homegrown-backend.onrender.com/api/homegrown/posts/${id}`
    );
    const data = await response.json();
    setUserPosts(data.payload);
  }
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div>
      <PostForm></PostForm>
      <div>
        {userPosts.map((userPost, index) => {
          console.log(userPost);
          return (
            <UserListingCard key={index} userPost={userPost}></UserListingCard>
          );
        })}
      </div>
    </div>
  );
}
