import styles from "../../styles/Blog.module.css"
 



export default function Sidebar() {
    return (
        <div className={styles["sidebar"]}>
             <div className={styles["Sidebar-item"]}>
             <h2 className={styles["sidebar-title"]}>
             POPULAR POSTS
             </h2>
             <p className={styles["sidebar-list"]}>
            Gardening 101: Tips and Tricks for a Thriving Garden
             </p>
             <p className={styles["sidebar-list"]}>
            Growing Green: The Ultimate Guide to Gardening and Sustainability
             </p>
             <p className={styles["sidebar-list"]}>
            From Plot to Plate: The Impact of Community Gardening on Food Access  
             </p>
             <p className={styles["sidebar-list"]}>
            Timing is Everything: The Best Seasons for Growing Fruits and Vegetables  
             </p>
             







             </div>
        </div>
        
    )
} 