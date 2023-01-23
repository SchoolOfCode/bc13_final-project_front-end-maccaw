import styles from "../../styles/DashboardContainer.module.css";
import Link from 'next/link';





export const Title = ({ userData }) => {
  return (
    <div className={styles["title-container"]}>

      <img src={userData["profile_picture"]} className={styles["title-user-img"]}/>
      <h1 className={styles["title-user-name"]}> {userData.first_name}'s Dashboard </h1>
    <div className={styles["title-buttons-container"]}>
       
      <Link href="/post"> 
      <button className={styles["title-myListings-button"]}> My Listings</button>
      </Link>

      <a href="https://gmail.com">
      <button className={styles["title-myMessages-button"]}> My Messages</button>
      </a>

    </div>
         
    
</div>
    
  );
};
