import { useState } from "react";
import styles from "../styles/NewPost.module.css";
import PostForm from "../components/PostForm/PostForm";
import ListingCard from "../components/ListingCard/ListingCard";

export default function NewPost() {
  return (
    <div>
      <PostForm></PostForm>
      <ListingCard></ListingCard>
    </div>
  );
}
