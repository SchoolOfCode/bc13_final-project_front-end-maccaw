import garden_tips from '../../json/garden_tips.json'


function GardenTips() {

  const randomTip = () => {
    return Math.floor(Math.random() * 29);
  }
  console.log(garden_tips[randomTip()].tip)

  return (
    <div>
      <p key={garden_tips[randomTip()].tip_id}>'{garden_tips[randomTip()].tip}'</p>
    </div>
  );
  
}
export default GardenTips;
