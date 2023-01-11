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
      "http://localhost:3000/api/staticdata_all_tables_joined"
    );
    const data = await response.json();
    setPosts(data);
    console.log(data);
  }



  async function handleClick() {
    console.log("SEARCH INPUT:", search);
    console.log("POSTS", posts);
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
