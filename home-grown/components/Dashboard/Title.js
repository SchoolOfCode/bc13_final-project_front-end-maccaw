import dashboardStyles from "../../styles/DashboardContainer.module.css";

export const Title = ({ userData }) => {
  return (
    <div className={dashboardStyles["container"]}>
      <h1 className={dashboardStyles["h1element"]}>
        {userData.first_name}'s Patch
      </h1>
      <div className={dashboardStyles["buttonsContainer"]}>
        <button className={dashboardStyles["search-button"]}>Listings</button>
        <button className={dashboardStyles["search-button"]}>Messages</button>
      </div>
    </div>
  );
};
