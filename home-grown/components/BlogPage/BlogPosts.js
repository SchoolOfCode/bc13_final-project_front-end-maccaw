import styles from "../../styles/Blog.module.css"
import Image from 'next/image';
import img1 from '../../public/illustrations/blog-image1.webp'
import img2 from '../../public/illustrations/blog-image2.webp'
import img3 from '../../public/illustrations/blog-image3.webp'




export default function BlogPosts() {
  return (
    <div className={styles["posts"]}>

      <div className={styles["post"]}>
      <div className={styles["post-info"]}>

      <p className={styles["post-date"]}> 21 Jan 23 </p>
      <h4 className={styles["post-title"]}> Unleashing the Green thumb: The Ultimate Starter Kit for Gardening Beginners </h4>
      <Image className={styles["post-img"]} src={img1} height={300}/>
      <p className={styles["post-des"]}> First and foremost, you'll need a basic set of hand tools to help you dig, cultivate, and plant. A good starter kit should include a shovel, rake, hoe, and trowel. These tools will be your go-to for preparing the soil, planting seeds or seedlings, and maintaining your garden.
      <br/>
      Next up, pruning tools. A pair of pruning shears and a hand saw will be useful for maintaining the shape of your plants and removing dead or damaged growth. This will help your plants grow healthy and strong.
      <br/>
      Of course, you'll need something to water your plants with. A watering can or hose with a nozzle will be essential for keeping your plants hydrated...                                       </p>

     </div>
     </div>


      <div className={styles["post"]}>
      <div className={styles["post-info"]}>

      <p className={styles["post-date"]}> 16 Jan 23 </p>
      <h4 className={styles["post-title"]}> The Beginner's Blueprint: A Step-by-Step Guide to Setting Up Your Garden </h4>
      <Image className={styles["post-img"]} src={img2} height={300}/>
      <p className={styles["post-des"]}> Starting a garden can seem like a daunting task, but with the right planning and preparation, it can be a fun and rewarding experience. In this post, we'll take a look at the steps you need to take to set up your garden for success.
      <br/>
      The first step is choosing the right location for your garden. Select a spot in your yard that gets plenty of sunlight and has well-draining soil. This will ensure that your plants have the right conditions to thrive
      Once you've chosen your location, it's time to plan your garden... </p>

     </div>
     </div>


      <div className={styles["post"]}>
      <div className={styles["post-info"]}>

      <p className={styles["post-date"]}> 04 Jan 23 </p>
      <h4 className={styles["post-title"]}> Herb-alicious: Delicious recipes using home-grown herbs </h4>
      <Image className={styles["post-img"]} src={img3} height={300}/>
      <p className={styles["post-des"]}> Growing your own herbs can be a rewarding and delicious experience. Not only do they add fresh flavor and aroma to your cooking, but they also provide a range of health benefits. In this post, we'll take a look at some delicious recipes that you can make using herbs straight from your own garden.
      <br/>
      First up, we have a classic herb, basil. This versatile herb can be used in a variety of dishes, from pasta to pizza. One of our favourite recipes is home-made basil pesto, it's easy to make and it's a great way to use up a lot of basil. Simply blend together basil leaves, Parmesan cheese, pine nuts, garlic... </p>

     </div>
     </div>


      <div className={styles["post"]}>
      <div className={styles["post-info"]}>

      <p className={styles["post-date"]}> 21 Jan 23 </p>
      <h4 className={styles["post-title"]}> Unleashing the Green thumb: The Ultimate Starter Kit for Gardening Beginners</h4>
      <Image className={styles["post-img"]} src={img1} height={300}/>
      <p className={styles["post-des"]}> First and foremost, you'll need a basic set of hand tools to help you dig, cultivate, and plant. A good starter kit should include a shovel, rake, hoe, and trowel. These tools will be your go-to for preparing the soil, planting seeds or seedlings, and maintaining your garden.
      <br/>
      Next up, pruning tools. A pair of pruning shears and a hand saw will be useful for maintaining the shape of your plants and removing dead or damaged growth. This will help your plants grow healthy and strong.
      <br/>
      Of course, you'll need something to water your plants with. A watering can or hose with a nozzle will be essential for keeping your plants hydrated...                                       </p>

     </div>
     </div>

    </div>
  )
}
