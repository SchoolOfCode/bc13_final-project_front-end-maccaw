import { useEffect } from "react";

function ListingContainer() {
  //fetch data from api
  //save the data in a state
  //map each entry of the array (in state) to a card
  // add search bar
  //create dropdown to search by location and onClick

  useEffect(() => {
    getPostData();
  });

  async function getPostData() {
    const response = await fetch("http://localhost:3000/api/staticdata_posts");
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default ListingContainer;
