import styles from "../../styles/DashboardContainer.module.css";


//  <button className={dashboardStyles["search-button"]}>Messages</button>



export const Title = ({ userData }) => {
  return (
    <div className={styles["title-container"]}>

      <img src={userData["profile_picture"]} className={styles["title-user-img"]}/>
      <h1 className={styles["title-user-name"]}> {userData.first_name}'s Dashboard </h1>
      
      <div className={styles["title-buttons-container"]}>

      <button className={styles["title-mylistings-button"]}> My Listings</button>
       
    </div>
    </div>
    
  );
};
