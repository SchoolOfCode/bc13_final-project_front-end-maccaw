import styles from "../../../styles/CropTable.module.css";

function CropTableCard({
  cropName,
  cropSeason,
  cropHarvestTime,
  cropImage,
  cropType,
  cropDifficulty,
}) {
  return (
    <div className={styles["crop-card"]}>
      <div className={styles["crop-name"]}>
        <p>{cropName}</p>
        <img className="crop-img" src={cropImage} />
      </div>

      <div className={styles["crop-season"]}>
        <p>Plant In:</p>
        <p>{cropSeason}</p>
      </div>

      <div className={styles["crop-harvest-time"]}>
        <p>Harvest In:</p>
        <p>{cropHarvestTime}</p>
      </div>

      <div className={styles["crop-difficulty"]}>
        <p>Difficulty:</p>
        <p>{cropDifficulty}</p>
      </div>
    </div>
  );
}

export default CropTableCard;
