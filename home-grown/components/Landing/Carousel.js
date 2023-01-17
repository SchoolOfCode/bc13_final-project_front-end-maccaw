import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Carousel.module.css" 
import profile from "../../public/illustrations/bunny.png"
import crop from "../../public/illustrations/strawberry.png"
import profile2 from "../../public/illustrations/sheep.png"
import crop2 from "../../public/illustrations/mushroom.png"
import Image from 'next/image'





export const Carousel = () => {
  const settings = {
 
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 2,
      adaptiveHeight: true,

       

    
    };
  
//  fade: true, 

    return (
   
    <Slider {...settings} className={styles["carousel"]}>

      <div className={styles.card}>
       <div className={styles["top"]}>

            <Image src={profile} width={100} height={95} className={styles["profile-Picture"]} />
             <p className={styles["username"]}> MARWA'S STRAWBERRY PATCH </p>

          </div>
            <p className={styles.p}>"I recently started a home strawberry garden and have been having some difficulties getting my plants to thrive. I would love any tips or advice from experienced gardeners on how to improve the health of my strawberry plants."</p>

             <Image src={crop} width={150} height={150} className={styles["crop-Picture"]} />
             
            </div>



            <div className={styles.card}>
       <div className={styles["top"]}>

            <Image src={profile} width={100} height={95} className={styles["profile-Picture"]} />
             <p className={styles["username"]}> MARWA'S STRAWBERRY PATCH </p>

          </div>
            <p className={styles.p}>"I recently started a home strawberry garden and have been having some difficulties getting my plants to thrive. I would love any tips or advice from experienced gardeners on how to improve the health of my strawberry plants."</p>

             <Image src={crop} width={150} height={150} className={styles["crop-Picture"]} />
             
            </div>



            <div className={styles.card}>
       <div className={styles["top"]}>

            <Image src={profile} width={100} height={95} className={styles["profile-Picture"]} />
             <p className={styles["username"]}> MARWA'S STRAWBERRY PATCH </p>

          </div>
            <p className={styles.p}>"I recently started a home strawberry garden and have been having some difficulties getting my plants to thrive. I would love any tips or advice from experienced gardeners on how to improve the health of my strawberry plants."</p>

             <Image src={crop} width={150} height={150} className={styles["crop-Picture"]} />
             
            </div>
     
     






            





              <div className={styles.card}>
                 <div className={styles["top"]}>
                  <Image src={profile2} width={100} height={95} className={styles["profile-Picture"]} />
                 

             <p className={styles["username"]}> WILL'S MUSHROOM PATCH </p>

          </div>
        
            <p className={styles.p}>"Calling all mushroom enthusiasts! I'm trying to grow white mushrooms at home, but I'm having some trouble getting them to grow. Does anyone have any tips or tricks for successful mushroom cultivation? "</p>

             <Image src={crop2} width={150} height={150} className={styles["crop-Picture"]} />
            </div>

                <div className={styles.card}>
                 <div className={styles["top"]}>
                  <Image src={profile2} width={100} height={95} className={styles["profile-Picture"]} />
                 

             <p className={styles["username"]}> WILL'S MUSHROOM PATCH </p>

          </div>
        
            <p className={styles.p}>"Calling all mushroom enthusiasts! I'm trying to grow white mushrooms at home, but I'm having some trouble getting them to grow. Does anyone have any tips or tricks for successful mushroom cultivation? "</p>

             <Image src={crop2} width={150} height={150} className={styles["crop-Picture"]} />
            </div>


                <div className={styles.card}>
                 <div className={styles["top"]}>
                  <Image src={profile2} width={100} height={95} className={styles["profile-Picture"]} />
                 

             <p className={styles["username"]}> WILL'S MUSHROOM PATCH </p>

          </div>
        
            <p className={styles.p}>"Calling all mushroom enthusiasts! I'm trying to grow white mushrooms at home, but I'm having some trouble getting them to grow. Does anyone have any tips or tricks for successful mushroom cultivation? "</p>

             <Image src={crop2} width={150} height={150} className={styles["crop-Picture"]} />
            </div>
              
          
       </Slider> 
        )
       }  
    
      
      
    
        

     
     
