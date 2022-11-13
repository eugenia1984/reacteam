import Carousel from "react-bootstrap/Carousel";
import { banner, banner1, banner2, banner3 } from "../../assets/images";

function Banner() {
  const bannerSlides = [banner, banner1, banner2, banner3]; 
  return (
    <Carousel fade>
      {
        bannerSlides.map( (item, index)  => 
          <Carousel.Item>
            <img
              className="d-block"
              height={500}
              width={"100%"}
              src={ item }
              alt="banner"
            />
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default Banner;
