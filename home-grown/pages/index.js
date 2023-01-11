import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles["image-container"]}>
        <div className={styles["text-container"]}>
          <h1 className={styles["title"]}>HOME GROWN</h1>
          <h3 className={styles["sub-title"]}>GOOD FOOD, GROWN TOGETHER</h3>
          <p className={styles.p}>
            We are a community-driven platform that connects people online to
            share their love of gardening and growing food. Our mission is to
            make it easy for you to find gardening partners in your area and
            make the most of your outdoor space. Whether you’re a seasoned green
            thumb or just starting out, our platform has something for everyone.
            Homegrown will help you find people to share seeds,
            plants, and gardening tips with, as well as learn new skills and
            techniques.{" "}
           
          </p>
          <div className={styles["button-container"]}>
            <button className={styles["button-one"]}>POST YOUR PLOT</button>
            <button className={styles["button-two"]}>VIEW LISTINGS</button>
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}></div>
    </div>
  );
}
