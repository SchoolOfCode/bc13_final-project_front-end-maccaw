import styles from "../styles/Home.module.css";
import Link from 'next/link';
import { Carousel } from "../components/Landing/Carousel";




export default function Home() {
  return (
    <div className={styles.landing}>
      <div className={styles["image-container"]}>
        <div className={styles["text-container"]}>
          <h1 className={styles["title"]}> HOME GROWN</h1>
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
      <Link href="/post"> 
      <button className={styles["button-one"]}> POST PLOT </button> 
      </Link>
      <Link href="/listings">
      <button className={styles["button-two"]}>VIEW LISTINGS</button>    
      </Link>
      
          </div>
        </div>
         
      </div>
      <div className={styles["cards-container"]}>
         <Carousel/>
         
         </div>
    </div>
  );
}
