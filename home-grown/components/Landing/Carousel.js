import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styles from "../../styles/Carousel.module.css" 
import Image from 'next/image'
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
      
          <div className={styles["top"]}>
            <Image src={crop2} width={60} height={60} className={styles["crop-picture"]} />
            <p className={styles["username"]}> WILL'S MUSHROOM PATCH </p> 
          </div>
    
          <div className={styles["middle"]}>
            <p className={styles["description"]}>Calling all mushroom enthusiasts! I'm trying to grow white mushrooms at home, but I'm having some trouble getting them to grow. Does anyone have any tips or tricks for successful mushroom cultivation?</p>
            <Image src={profile2} width={180} height={180} className={styles["profile-picture"]} />
          </div> 
          
          <div className={styles["bottom"]}>
            <p className={styles["ratings"]}> 🥕🥕🥕🥕 </p>
          </div>
      </div>
       


       <div className={styles["card"]}>
          <div className={styles["top"]}>
            <Image src={crop} width={60} height={60} className={styles["crop-picture"]} />
            <p className={styles["username"]}> ALEX'S STRAWBERRY PATCH </p>
          </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>I recently started a home strawberry garden and have been having some difficulties getting my plants to thrive. I would love any tips or advice from experienced gardeners on how to improve the health of my strawberry plants.</p>
            <Image src={profile} width={180} height={180} className={styles["profile-picture"]} />
          </div>    
          <div className={styles["bottom"]}>
            <p className={styles["ratings"]}>  🥕🥕🥕 </p>
          </div>
      </div>



       <div className={styles["card"]}>
          <div className={styles["top"]}>
            <Image src={crop3} width={60} height={60} className={styles["crop-picture"]} />
            <p className={styles["username"]}> AMINA'S RASPBERRY PATCH </p>
          </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>I am having trouble with my raspberry plants and am seeking advice from experienced gardeners. Any suggestions or tips would be greatly appreciated.</p>
            <Image src={profile3} width={180} height={180} className={styles["profile-picture"]} />
          </div>    
          <div className={styles["bottom"]}>
            <p className={styles["ratings"]}>  🥕🥕🥕 </p>
          </div>
      </div>



      <div className={styles["card"]}>
          <div className={styles["top"]}>
            <Image src={crop4} width={60} height={60} className={styles["crop-picture"]} />
            <p className={styles["username"]}> JULIO'S ONION PATCH </p>
          </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>I am an expert white onion grower with a large crop ready for harvest. I am seeking strong and able-bodied individuals to assist with the physical labor. Please contact me for more details.</p>
            <Image src={profile4} width={180} height={180} className={styles["profile-picture"]} />
          </div>    
          <div className={styles["bottom"]}>
            <p className={styles["ratings"]}> 🥕🥕🥕🥕 </p>
          </div>
      </div>




      
    <div className={styles["card"]}>
          <div className={styles["top"]}>
            <Image src={crop5} width={60} height={60} className={styles["crop-picture"]} />
            <p className={styles["username"]}> MARWA'S LETTUCE PATCH </p>
          </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>Calling all green thumbed friends! I'm having trouble getting my lettuce to thrive in my garden. Any advice on how to keep the leaves crisp and the plants healthy? Thanks in advance for any suggestions!</p>
            <Image src={profile5} width={180} height={180} className={styles["profile-picture"]} />
          </div>    
          <div className={styles["bottom"]}>
            <p className={styles["ratings"]}>  🥕🥕🥕 </p>
          </div>
      </div>




       <div className={styles["card"]}>
          <div className={styles["top"]}>
            <Image src={crop6} width={60} height={60} className={styles["crop-picture"]} />
            <p className={styles["username"]}> CHET'S TOMATO PATCH </p>
          </div>
          <div className={styles["middle"]}>
            <p className={styles["description"]}>I'm trying to decide which vegetables to plant in my garden this year and I can't decide if I want to include tomatoes or not. I love the taste of homegrown tomatoes but they can be finicky to grow. Any advice from would be greatly appreciated.</p>
            <Image src={propfile6} width={180} height={180} className={styles["profile-picture"]} />
          </div>    
          <div className={styles["bottom"]}>
            <p className={styles["ratings"]}>  🥕🥕🥕 </p>
          </div>
      </div>
   
       </Slider>
    
        )
       }  
   

