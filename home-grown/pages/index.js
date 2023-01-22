import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Carousel } from "../components/Landing/Carousel";

export default function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles["image-container"]}>
        <div className={styles["text-container"]}>
          <h1 className={styles["title"]}> HOME GROWN</h1>
          <h3 className={styles["sub-title"]}>GOOD FOOD, GROWN TOGETHER</h3>
          <p className={styles.p}>
            Our platform is community-driven and focuses on connecting
            individuals who have a passion for gardening and growing their own
            food. Our goal is to simplify the process of finding gardening
            partners in your local area and to help you fully utilize the
            potential of your outdoor space through shared knowledge and
            resources.{" "}
          </p>
          <div className={styles["button-container"]}>
            <Link href="/post">
              <button className={styles["button-one"]}> POST PLOT </button>
            </Link>
            <Link href="/listings">
              <button className={styles["button-two"]}>VIEW LISTINGS</button>
            </Link>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className={styles["our-mission-container"]}>
      <div className={styles["statement-container"]}>
        <h3 className={styles["statement-heading"]}>We help you Connect with others in a shared Goal</h3>
        <p className={styles["statement-paragraph"]}>Whether you’re a seasoned green,thumb or just starting out, our platform has something for everyone. Home-grown will help you find people to share seeds, plants, and gardening tips with, as well as learn new skills and techniques.</p>
      </div>
      <div className={styles["mission-container-bottom"]}>
      <div className={styles["mission-container-image"]}>
    
      </div>
      <div className={styles["mission-container-cards"]}>
      
        </div>
  
</div>
      </div>
      <div className={styles["cards-container"]}>
        <Carousel />
      </div>
    </div>
  );
}
