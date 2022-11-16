import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import { banner, banner1, banner2, banner3 } from "../../assets/images";
import "./BannerStyle.css";

function Banner() {
  const bannerSlides = [banner, banner1, banner2, banner3]; 
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      variant="dark" 
      fade
    >
      {
        bannerSlides.map( item => 
          <Carousel.Item
            key={item}
            className="carousel-item"
            >
            <img
              className="d-block w-100 img-carousel"
              src={ item }
              alt={ item } 
            />
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default Banner;
