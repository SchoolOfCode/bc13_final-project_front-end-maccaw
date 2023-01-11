import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import dashboardStyles from "../../styles/DashboardContainer.module.css";

export default function CarouselImage({ userImage }) {
  return (
    <div className={dashboardStyles.carouselContainer}>
      <img src={userImage} />
    </div>
  );
}

// export default class ImageCarousel extends Component {
//   render() {
//     return (
//       <div className={dashboardStyles.carouselContainer}>
//         <img />
//         <Carousel>
//           <div className={dashboardStyles.carouselImage}>
//             <img
//               src="https://images.immediate.co.uk/production/volatile/sites/10/2018/10/2048x1365-How-to-start-an-allotment-LI805369-c94303d.jpg"
//               alt="image1"
//             />
//             <p className="legend">Image 1</p>
//           </div>
//           <div className={dashboardStyles.carouselImage}>
//             <img src="https://i.redd.it/g2xcbacjg5s51.jpg" alt="image2" />
//             <p className="legend">Image 2</p>
//           </div>
//           <div className={dashboardStyles.carouselImage}>
//             <img
//               src="https://2.bp.blogspot.com/-TTzw-pQZWh4/Ud6kK84jasI/AAAAAAAAB4I/GgV6_Z-qjDI/s1600/backyard-raised-garden.jpg"
//               alt="image3"
//             />
//             <p className="legend">Image 3</p>
//           </div>
//         </Carousel>
//       </div>
//     );
//   }
// }
