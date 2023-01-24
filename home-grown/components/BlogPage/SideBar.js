import styles from "../../styles/Blog.module.css"
 



export default function Sidebar() {
    return (
        <div className={styles["sidebar"]}>
             <div className={styles["sidebar-item"]}>
             <h2 className={styles["sidebar-title"]}>
             POPULAR POSTS
             </h2>
             <ul className={styles["sidebar-list"]} >
             <li>
            Gardening 101: Tips and Tricks for a Thriving Garden
             </li>
             <li>
            Growing Green: The Ultimate Guide to Gardening and Sustainability
             </li>
             <li>
            From Plot to Plate: The Impact of Community Gardening on Food Access  
             </li>
             <li>
            Timing is Everything: The Best Seasons for Growing Fruits and Vegetables  
            </li>
             </ul>







             </div>
        </div>
        
    )
} 