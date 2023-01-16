import { useState, useEffect } from "react";
import styles from "../styles/NewPost.module.css";
import PostForm from "../components/PostForm/PostForm";
import ListingCard from "../components/ListingCard/ListingCard";


const [userPost, setUserPost] = useState("");


async function getPostData() {
    const response = await fetch(
      "https://homegrown-backend.onrender.com/api/homegrown/posts"
    );
    const data = await response.json();
    setPosts(data.payload);
    console.log(data);
  }




export default function NewPost() {
  useEffect(() => 
{ 
  getPostData() 
}, [])
  return (
    <div>
      <PostForm></PostForm>
      <ListingCard></ListingCard>
    </div>
  );
}
