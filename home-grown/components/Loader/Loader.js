import styles from "../../styles/Loader.module.css";
import { useState, useEffect } from "react";

const LOADERS = [
  ["🥬", "I’m kale-ing it a day."],
  ["🌽", "You’re a-maize-ing"],
  ["🥕", "What’s a carrot’s favorite movie? The Carrot-tie Kid."],
  ["🍆", "You make my heart skip a beet!"],
  ["🍅", " I love you from my head to-ma-toes!"],
  ["🍇", "Grape minds think alike."],
  ["🍋", "Carpe lemon – squeeze the day!"],
  ["🍎", "I find you very ap-peel-ing"],
  ["🍉", "You’re one in a melon"],
  ["🍌", "You can peel it in your bones"],
  ["🧑🏻‍🌾", " Oh crop."],
  ["🪴", "I’ll never leaf you."],
  ["🧄", "Thanks shallot."],
];

function Loader() {
  const [loader, setLoader] = useState(LOADERS[Math.floor(Math.random() * LOADERS.length)]);
  const [animate, setAnimate] = useState(false);

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  }, [animate]);

  useEffect(() => {
    const id = setInterval(() => {
      const index = Math.floor(Math.random() * LOADERS.length);
      setLoader(LOADERS[index]);
      setAnimate(!animate);
    }, 1000);
    setIntervalId(id);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}>
        <span
          className={`${styles["emoji"]} ${animate ? styles["animate"] : ""}`}
        >
          {loader[0]}
        </span>
        <span
          className={`${styles["text"]} ${animate ? styles["animate"] : ""}`}
        >
          {loader[1] + "..."}
        </span>
      </div>
    </div>
  );
}

export default Loader;
