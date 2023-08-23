import SectionHeading from "../../components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import foodCategory1 from "../../assets/images/home/slide1.jpg";
import foodCategory2 from "../../assets/images/home/slide2.jpg";
import foodCategory3 from "../../assets/images/home/slide3.jpg";
import foodCategory4 from "../../assets/images/home/slide4.jpg";
import foodCategory5 from "../../assets/images/home/slide5.jpg";

const foodCategoryImages = [
  { categoryImg: foodCategory1, name: "salad" },
  { categoryImg: foodCategory2, name: "soups" },
  { categoryImg: foodCategory3, name: "pizza" },
  { categoryImg: foodCategory4, name: "desert" },
  { categoryImg: foodCategory5, name: "cake" },
  { categoryImg: foodCategory1, name: "salad" },
  { categoryImg: foodCategory2, name: "soups" },
  { categoryImg: foodCategory3, name: "pizza" },
  { categoryImg: foodCategory4, name: "desert" },
  { categoryImg: foodCategory5, name: "cake" },
];

const swiperSlides = foodCategoryImages?.map((foodCategoryImage, index) => (
  <SwiperSlide key={index}>
    <img className="w-full" src={foodCategoryImage.categoryImg} alt="food category photo" />
    <div className="text-center uppercase font-semibold relative -top-16 text-black text-opacity-50">{foodCategoryImage.name}</div>
  </SwiperSlide>
));

const FoodCategorySlider = () => {
  return (
    <div className="py-10">
      <div className="mb-10">
        <SectionHeading subHeading={`From 11:00am to 10:00pm`} heading={`order online`} />
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {swiperSlides}
        </Swiper>
      </div>
    </div>
  );
};

export default FoodCategorySlider;
