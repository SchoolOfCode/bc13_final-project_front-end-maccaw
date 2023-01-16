import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { Title } from "../components/Dashboard/Title";
import Carousel from "../components/Dashboard/Carousel";
import Profile from "../components/Dashboard/Profile";
import PlotChart from "../components/Dashboard/PlotChart";
import dashboardStyles from "../styles/DashboardContainer.module.css";

export default function Dashboard() {
  const [err, setErr] = useState("");
  const { currentUser, logout, isUserAuthenticated } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userPosts, setUserPosts] = useState();

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
    const response = await fetch(
      ` https://homegrown-backend.onrender.com/api/homegrown/posts/${firebase_id}`
    );
    const data = await response.json();
    setUserPosts(data.payload);
    console.log("POSTS", data.payload);
  }

  async function getData() {
    let firebase_id = currentUser.uid;
    const response = await fetch(
      ` https://homegrown-backend.onrender.com/api/homegrown/users/${firebase_id}`
    );
    const data = await response.json();
    console.log("DATA", data);
    console.log("CURRENT USER", currentUser);

    setUserData(data.payload[0]);
    setIsLoading(false);
  }

  async function handleLogout() {
    setErr("");

    try {
      await logout();
      router.push("/login");
    } catch {
      setErr("failed to log out");
    }
  }

  console.log(userData, "here");

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={dashboardStyles.mainContainer}>
        <Title userData={userData} />

        {/* <button className={dashboardStyles.logOutButton} onClick={handleLogout}>Log Out</button> */}
        <Carousel className={dashboardStyles.userPlotImage} userImage={userData["plot_image"]} />

        <Carousel
          className={dashboardStyles.userPlotImage}
          userImage={userData["plot_image"]}
        />

        <Profile userData={userData}></Profile>
        <PlotChart userPosts={userPosts} />
      </div>
    );
  }
}
