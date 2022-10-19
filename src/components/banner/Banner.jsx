import Carousel from "react-bootstrap/Carousel";
import { banner, banner1, banner2, banner3 } from "../../assets/images";

function Banner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          height={500}
          width={"100%"}
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          height={500}
          width={"100%"}
          src={banner3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          height={500}
          width={"100%"}
          src={banner2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
