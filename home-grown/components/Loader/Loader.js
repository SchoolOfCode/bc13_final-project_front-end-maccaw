import styles from "../../styles/Loader.module.css";
import { useState, useEffect } from "react";

const LOADERS = [
  ["π₯¬", "Iβm kale-ing it a day."],
  ["π½", "Youβre a-maize-ing"],
  ["π₯", "The Carrot-tie Kid."],
  ["π", "You make my heart skip a beet!"],
  ["π", " I love you from my head to-ma-toes!"],
  ["π", "Grape minds think alike."],
  ["π", "Carpe lemon β squeeze the day!"],
  ["π", "I find you very ap-peel-ing"],
  ["π", "Youβre one in a melon"],
  ["π", "You can peel it in your bones"],
  ["π§π»βπΎ", " Oh crop."],
  ["πͺ΄", "Iβll never leaf you."],
  ["π§", "Thanks shallot."],
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
