import Slider from 'react-slick';




  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
  slidesPerRow: 3

  };

export default function Carousel () {


  return (
    <Slider {...settings} className="carousel">
        <div>
        <p>username</p>
      
        </div>

    </Slider>
  );
  }




