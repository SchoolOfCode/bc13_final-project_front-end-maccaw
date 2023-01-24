import Loader from "../components/Loader/Loader";
import styles from '../styles/Loader.module.css'

export default function LoaderTest() {
  return (
    <div className={styles["loader-container"]}>
      <Loader />
    </div>
  );
}
