import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../../assets/images/home/01.jpg";
import slide2 from "../../../assets/images/home/02.jpg";
import slide3 from "../../../assets/images/home/03.png";
import slide4 from "../../../assets/images/home/04.jpg";
import slide5 from "../../../assets/images/home/05.png";
import slide6 from "../../../assets/images/home/06.png";

const slideImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide1, slide2, slide3, slide4, slide5, slide6];
const carouselItems = slideImages.map((slideImage, index) => (
  <div key={index}>
    <img loading="lazy" src={slideImage} alt="slider" />
  </div>
));

const Slider = () => {
  return <Carousel className="text-center">{carouselItems}</Carousel>;
};

export default Slider;
