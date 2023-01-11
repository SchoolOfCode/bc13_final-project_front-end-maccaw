import listingStyles from '../../styles/ListingContainer.module.css'
import dashboardStyles from '../../styles/DashboardContainer.module.css'

export const Title = ({ userData }) => {
  return (
    <div className={dashboardStyles['container']}>
      <h1 className={dashboardStyles['h1element']}>{userData.first_name}</h1>
      <div className={dashboardStyles['buttonsContainer']}>
      <button className={listingStyles['search-button']}>Listings</button>
      <button className={listingStyles['search-button']}>Messages</button>
    </div>  
    </div>
  );
}

