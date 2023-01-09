import { useEffect,useState } from "react";
import ListingCard from "../ListingCard/ListingCard";

function ListingContainer() {
  //fetch data from api
  //save the data in a state
  //map each entry of the array (in state) to a card
  // add search bar
  //create dropdown to search by location and onClick

  useEffect(() => {
    getPostData();
  });

  const [posts, setPosts] = useState(null);

  async function getPostData() {
    const response = await fetch(
      "http://localhost:3000/api/staticdata_all_tables_joined"
    );
   
    const data = await response.json();
    
    setPosts(data);
    console.log(data)
  }

  if (!posts) {
    return <div>...Loading</div>;
  } else {
    return (
     posts.map((element) => <div><ListingCard description={element.description} /></div>) 
    );
  }
}

export default ListingContainer;
