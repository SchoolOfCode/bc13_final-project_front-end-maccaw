import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { Title } from "../components/Dashboard/Title";
import Profile from "../components/Dashboard/Profile";
import PlotChart from "../components/Dashboard/PlotChart";
import styles from "../styles/DashboardContainer.module.css";
import CropTableContainer from "../components/Dashboard/CropTable/CropTableContainer";
import plot from "../public/illustrations/plot.jpg";
import Loader from "../components/Loader/Loader";
import CreatePlotForm from "../components/Dashboard/CreatePlotForm/CreatePlotForm";

export default function Dashboard() {
  const { currentUser, logout, isUserAuthenticated } = useAuth();
  const router = useRouter();
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const newUserImages = {
    plot_image:
      "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556011_PlbhKss0alfFmzNuqXdE3L0OfkHQ1rHH.jpg",
  };
  const [err, setErr] = useState("");
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userPosts, setUserPosts] = useState();
  const [show, setShow] = useState(false);

  if (!currentUser) {
    router.push("/login");
  }

  useEffect(() => {
    if (currentUser) {
      getData();
      getPosts();
      console.log("useEffect");
    }
  }, []);

  async function createPlot(plotSize, plotPostcode, plotImageUrl) {
    let firebase_id = currentUser.uid;
    let token = await currentUser.getIdToken();

    const plotData = {
      firebase_id: firebase_id,
      plot_size: plotSize,
      location: plotPostcode,
      plot_image: plotImageUrl,
    };

    const response = await fetch(`${backendURL}/api/homegrown/plots`, {
      method: "PATCH",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(plotData),
    });
    router.reload(window.location.pathname);
  }

  async function getPosts() {
    let firebase_id = currentUser.uid;
    let token = await currentUser.getIdToken();
    const response = await fetch(
      `${backendURL}/api/homegrown/posts/${firebase_id}`,
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
      `${backendURL}/api/homegrown/users/${firebase_id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const data = await response.json();
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

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles["main-container"]}>
      <Title userData={userData} />

      <div className={styles["left-container"]}>
        {userData.plot_image ? (
          <img src={userData.plot_image} className={styles["plot-picture"]} />
        ) : (
          <img
            src={newUserImages["plot_image"]}
            className={styles["plot-picture"]}
          />
        )}
        <Profile className={styles["profile-container"]} userData={userData} />
      </div>
      {userData.plot_size ? (
        <div className={styles["right-container"]}>
          <CropTableContainer
            className={styles["crop-table-container"]}
            userPosts={userPosts}
          />
          <PlotChart userPosts={userPosts} />
        </div>
      ) : (
        <div className={styles["right-container"]}>
          <div className={styles["message-container"]}>
            <h1 className={styles["add-plot-message"]}>
              Please add a plot and create a post to see crop analytics here
            </h1>
            <button
              className={styles["button-one"]}
              onClick={() => {
                setShow(!show);
              }}
            >
              ADD PLOT
            </button>
            {show && (
              <div className={styles["pop-up-background"]}>
                <div className={styles["pop-up"]}>
                  <CreatePlotForm setShow={setShow} createPlot={createPlot} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
