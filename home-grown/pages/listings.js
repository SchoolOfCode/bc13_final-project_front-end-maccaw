import ListingContainer from "../components/ListingContainer/ListingContainer";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/ListingContainer.module.css";
import toast, { Toaster } from "react-hot-toast";

function Listings() {
  useEffect(() => {
    getPostData();
  }, []);

  const [search, setSearch] = useState("");
  const searchRef = useRef("Search by postcode or crop name");
  const [posts, setPosts] = useState(null);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function getPostData() {
    const response = await fetch(backendURL + "/api/homegrown/public/posts");
    const data = await response.json();
    setPosts(data.payload);
  }

  //search in the backend
  async function handleClick() {
    //check if the search query has changed and then refetch the data with the search query each time
    if (search) {
      let newArray = posts.filter(
        (element) =>
          element.location.includes(search.toUpperCase()) ||
          element.crop_name.toUpperCase().includes(search.toUpperCase())
      );
      setPosts(newArray);
    } else {
      alert("please enter a post code");
    }
  }

  function handleClear() {
    searchRef.current.value = "";
    setSearch("");
    getPostData();
  }

  function showEmailToast(result, error) {
    if (result) {
      toast.success("Email sent!");
    } else if (error) {
      toast.error("Email failed to send");
    }
  }

  return (
    <div className={styles["listing-page-container"]}>
      <Toaster />
      <SearchBar
        handleClick={handleClick}
        search={search}
        setSearch={setSearch}
        handleClear={handleClear}
        searchRef={searchRef}
      />
      <ListingContainer
        posts={posts}
        search={search}
        showEmailToast={showEmailToast}
      />
    </div>
  );
}

export default Listings;
