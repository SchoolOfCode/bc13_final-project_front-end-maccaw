import styles from '../../styles/Home.module.css'


export default function LandingCard({src, alt, heading, paragraph}){
return (<div className={styles["mission-card"]}>
<img className={styles["mission-card-icon"]} src={src} alt={alt}/>
<h4  className={styles["mission-card-heading"]} >{heading}</h4>
<p className={styles["mission-paragraph"]}>{paragraph}</p>
</div>)
}