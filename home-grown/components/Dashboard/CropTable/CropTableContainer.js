import CropTableCard from "./CropTableCard";
import styles from '../../../styles/CropTable.module.css'

function CropTableContainer({userPosts}) {
    console.log("Users CROPS", userPosts )
   
   
   if(userPosts){
    return ( 
         <div className={styles["crop-table-container"]}>
        {userPosts.map((element)=><CropTableCard cropName={element.crop_name} cropSeason = {element.crop_season} cropHarvestTime = {element.crop_harvest_time} cropImage={element.crop_image} cropType = {element.crop_type} cropDifficulty={element.crop_difficulty}/>)}
         </div>);
         
   }
   else{
    return(<h1>...Loading</h1>)
   }
  
}

export default CropTableContainer;