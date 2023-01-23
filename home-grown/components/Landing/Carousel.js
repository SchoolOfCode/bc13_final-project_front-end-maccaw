import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Carousel.module.css" 
import Image from 'next/image'
import Link from 'next/link'
import profile from "../../public/illustrations/bunny.png"
import profile2 from "../../public/illustrations/sheep.png"
import profile3 from "../../public/illustrations/chicken.png"
import profile4 from "../../public/illustrations/fox.png"
import profile5 from "../../public/illustrations/cow.png"
import propfile6 from "../../public/illustrations/goat.png"
import crop from "../../public/illustrations/strawberry.png"
import crop2 from "../../public/illustrations/mushroom.png"
import crop3 from "../../public/illustrations/raspberry.png"
import crop4 from "../../public/illustrations/onion.png"
import crop5 from "../../public/illustrations/lettuce.png"
import crop6 from "../../public/illustrations/tomato.png"






export const Carousel = () => {
  const settings = {
 
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 2,
      adaptiveHeight: true,
      responsive: [
        {
        breakpoint: 440,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         vertical: true,
         verticalSwiping: true,
         arrows: false,
         speed: 400,
                  }
                },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
         speed: 400
          }
        },
      {
        breakpoint: 2000,
         settings: {
         slidesToShow: 3,
         slidesToScroll: 2,
         arrows: false,
         speed: 400,
                  }
                },
          
        
      ]
    
  }
  
//  fade: true, 

    return (
  
    <Slider {...settings} className={styles["carousel"]}>

      
      <div className={styles["card"]}>
      <div className={styles["reviewer-container"]}>
      <img src="/illustrations/sheep.png" className={styles["profile-picture"]} />
      <h5 className={styles["reviewer-name"]}>Jessica Sheep</h5>
      </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>"It never seemed possible for me to have my own garden in the city, but this website made it a reality for me. I was able to find a spare plot in my neighborhood and now I have my own vegetable garden and I'm so happy with the fresh produce I get to enjoy!"</p>
          </div> 
      </div>
       
      <div className={styles["card"]}>
      <div className={styles["reviewer-container"]}>
      <img src="/illustrations/bunny.png" className={styles["profile-picture"]} />
      <h5 className={styles["reviewer-name"]}>Mabel Babel</h5>
      </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>"I've always been interested in gardening, but I didn't know how to find a plot to start my own. This website made it so easy for me to find a spare garden plot in my community and now I can finally live my dream of growing my own fruits and vegetables."</p>
          </div> 
      </div>

      <div className={styles["card"]}>
      <div className={styles["reviewer-container"]}>
      <img src="/illustrations/goat.png" className={styles["profile-picture"]} />
      <h5 className={styles["reviewer-name"]}>Pippy Longsocks</h5>
      </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>"I was pleasantly surprised at how easy it was to find a spare plot to start my own garden with the help of this website. I never knew that there were so many available plots in my area. It's been a game changer for me, I have a new hobby and fresh produce to enjoy."</p>
          </div> 
      </div>

      <div className={styles["card"]}>
      <div className={styles["reviewer-container"]}>
      <img src="/illustrations/fox.png" className={styles["profile-picture"]} />
      <h5 className={styles["reviewer-name"]}>Jason Bourne</h5>
      </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>"Very Happy I found this website, it's allowed me to find a spare plot in my community where I can start my own garden. I never knew how easy it could be to have my own vegetable garden, I'm looking forward to seeing it grow and the fresh produce I will be able to enjoy."</p>
          </div> 
      </div>

      <div className={styles["card"]}>
      <div className={styles["reviewer-container"]}>
      <img src="/illustrations/cow.png" className={styles["profile-picture"]} />
      <h5 className={styles["reviewer-name"]}>William Tudor</h5>
      </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>"I never realized how much I would enjoy having my own garden until I found this website and was able to find a spare plot in my neighborhood. It's been a great way for me to connect with nature and also have fresh produce on my table. Great website."</p>
          </div> 
      </div>

      <div className={styles["card"]}>
      <div className={styles["reviewer-container"]}>
      <img src="/illustrations/chicken.png" className={styles["profile-picture"]} />
      <h5 className={styles["reviewer-name"]}>Grace Kelley</h5>
      </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>"Who knew how easy it was to find a spare plot to start my own garden! It's been a great resource for me to find a place to grow my own fruits and vegetables. I'm so excited to have my own little farm and enjoy fresh produce all year round."</p>
          </div> 
      </div>

       </Slider>
    
        )
       }  
   

