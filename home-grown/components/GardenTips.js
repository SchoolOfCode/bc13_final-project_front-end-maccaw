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
  console.log(garden_tips[gardenTips].tip)
  return (
    <div>
      <p>{garden_tips[gardenTips].tip}</p>
    </div>
  );
  
}
export default GardenTips;
