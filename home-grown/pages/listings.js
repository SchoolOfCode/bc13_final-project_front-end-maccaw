import ListingContainer from "../components/ListingContainer/ListingContainer";
import { SearchBar } from "../components/SearchBar";
import {useState, useEffect} from 'react'

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
    console.log("POSTS", posts)


    let newArray = posts.filter( element => element.location === search)
    setPosts(newArray)

  }

  return (
    <div>
      <SearchBar handleClick={handleClick} setSearch={setSearch}/>
      <ListingContainer posts={posts} search={search}/>
    </div>
  );
}

export default Listings;
