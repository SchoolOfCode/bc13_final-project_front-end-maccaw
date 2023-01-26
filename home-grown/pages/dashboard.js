import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { Title } from "../components/Dashboard/Title";
import Profile from "../components/Dashboard/Profile";
import Image from "next/image";
import PlotChart from "../components/Dashboard/PlotChart";
import styles from "../styles/DashboardContainer.module.css";
import CropTableContainer from "../components/Dashboard/CropTable/CropTableContainer";
import plot from "../public/illustrations/plot.jpg";
import Loader from "../components/Loader/Loader";



export default function Dashboard() {
  const [err, setErr] = useState("");
  const { currentUser, logout, isUserAuthenticated } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userPosts, setUserPosts] = useState();

  const newUserImages = {
    plot_image:
      "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556011_PlbhKss0alfFmzNuqXdE3L0OfkHQ1rHH.jpg",
  };

  if (!currentUser) {
    router.push("/login");
  }

  useEffect(() => {
    if (currentUser) {
      getData();
      getPosts();
    }
  }, []);

  async function getPosts() {
    let firebase_id = currentUser.uid;
    let token = await currentUser.getIdToken();

    const response = await fetch(
      ` https://homegrown-backend.onrender.com/api/homegrown/posts/${firebase_id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const data = await response.json();

    setUserPosts(data.payload);
  }

  async function getData() {
    let token = await currentUser.getIdToken();
    let firebase_id = currentUser.uid;
    const response = await fetch(
      ` https://homegrown-backend.onrender.com/api/homegrown/users/${firebase_id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    setUserData(data.payload[0]);
    setIsLoading(false);
  }
 console.log("USER DATA", userData)
  async function handleLogout() {
    setErr("");

    try {
      await logout();
      router.push("/login");
    } catch {
      setErr("failed to log out");
    }
  }

  if (isLoading) {
    return <Loader/>;
  } else {
    return (
      <div className={styles["main-container"]}>
        <Title userData={userData} />

        <div className={styles["left-container"]}>
          {userData.plot_image ? (
            <Image src={plot} className={styles["plot-picture"]} />
          ) : (
            <img
              src={newUserImages["plot_image"]}
              className={styles["plot-picture"]}
            />
          )}
          <Profile
            className={styles["profile-container"]}
            userData= {userData}
          />
        </div>
            
        <div className={styles["right-container"]}>
          <CropTableContainer
              className={styles["crop-table-container"]}
              userPosts={userPosts}/>
    
         <PlotChart userPosts={userPosts} />
          </div>

            
          </div>
      
     
    );
  }

}