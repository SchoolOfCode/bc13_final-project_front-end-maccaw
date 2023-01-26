import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Carousel } from "../components/Landing/Carousel";
import LandingCard from "../components/LandingCard/LandingCard";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();

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
            {currentUser ? (
              <Link href="/post">
                <button className={styles["button-one"]}> POST PLOT </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className={styles["button-one"]}> POST PLOT </button>
              </Link>
            )}

            <Link href="/listings">
              <button className={styles["button-two"]}>VIEW LISTINGS</button>
            </Link>
          </div>
        </div>
      </div>
      <h3 className={styles["our-mission-title"]}>
        Our Mission: Helping You Connect with Others in a Shared Goal!
      </h3>

      <div className={styles["our-mission-container"]}>
        <div className={styles["mission-container-bottom"]}>
          <div className={styles["mission-image-container"]}></div>
          <div className={styles["mission-cards-container"]}>
            <div className={styles["cards-grid"]}>
              <LandingCard
                src="/icons/sustainability.png"
                alt="sustainability"
                heading="Sustainability"
                paragraph="Diversity in our cities green spaces promotes a healthy ecosystem for animal and reduce the need for imported foods"
              />
              <LandingCard
                src="/icons/community.png"
                alt="community"
                heading="Community"
                paragraph="We help you build a community around you that helps, supports and teaches each-other."
              />
              <LandingCard
                src="/icons/money.png"
                alt="money saving"
                heading="Money Saving"
                paragraph="Growing your own food, and learning how to eat seasonally can save you money! Helping you during these trying times!"
              />
              <LandingCard
                src="/icons/new-skill.png"
                alt="learn a new skill"
                heading="Learn A New Skill"
                paragraph="Learn a new skill, an app that encourages people to start growing their own food and become self sufficient!"
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles["testimonies-title"]}>~What Our Customers Say~</h3>
      <div className={styles["cards-container"]}>
        <Carousel />
      </div>
    </div>
  );
}
