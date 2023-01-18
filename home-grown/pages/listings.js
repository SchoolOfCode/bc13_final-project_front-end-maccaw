import ListingContainer from "../components/ListingContainer/ListingContainer";
import { SearchBar } from "../components/SearchBar/SearchBar";
import {useState, useEffect} from 'react'
import styles from '../styles/ListingContainer.module.css'

function Listings() {
  useEffect(() => {
    getPostData();
  },[]);

  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState(null);

  async function getPostData() {
    const response = await fetch(
      "https://homegrown-backend.onrender.com/api/homegrown/public/posts"
    );
    const data = await response.json();
    setPosts(data.payload);
    console.log(data);
  }


//search in the backend
  async function handleClick() {
    console.log("SEARCH INPUT:", search);
    console.log("POSTS", posts);
    //check if the search query has changed and then refetch the data with the search query each time
    if(search){
      let newArray = posts.filter( element => element.location.includes(search.toUpperCase()) || element.crop_name.toUpperCase().includes(search.toUpperCase()))
      setPosts(newArray)
    } else {
      alert('please enter a post code');
    }
  }

  return (
    <div className={styles["listing-page-container"]}>
      <SearchBar handleClick={handleClick} setSearch={setSearch} clear ={()=>getPostData()}/>
      <ListingContainer posts={posts} search={search}/>    
    </div>
  );
}

export default Listings;
