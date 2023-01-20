import garden_tips from "../json/garden_tips.json";
import { useState, useEffect } from 'react';


function GardenTips() {
  const [gardenTips, setGardenTips] = useState(0);
  const dashBoardClick = document.getElementsByClassName("dashboardButton");

  useEffect(() => {
    if(gardenTips !== 29) {
      setGardenTips(gardenTips + 1);
    }
    else {
      setGardenTips(0);
    }
  }, []);
  console.log(garden_tips[0].tip)
  return (
    <div>
      <p key={garden_tips[0].tip_id}>{garden_tips[0].tip}</p>
    </div>
  );
  
}
export default GardenTips;
