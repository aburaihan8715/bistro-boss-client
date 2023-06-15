import { Helmet } from "react-helmet-async";
import Testimonials from "./Testimonials/Testimonials";
import CallUs from "./CallUs/CallUs";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import FoodBanner from "./FoodBnner/FoodBanner";
import FoodCategorySlider from "./FoodCategorySlider/FoodCategorySlider";
import FoodMenu from "./FoodMenu/FoodMenu";
import RecommendFood from "./RecommendFood/RecommendFood";
import Slider from "./Slider/Slider";

const PageHome = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Slider></Slider>
      <FoodCategorySlider></FoodCategorySlider>
      <FoodBanner></FoodBanner>
      <FoodMenu></FoodMenu>
      <CallUs></CallUs>
      <RecommendFood></RecommendFood>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default PageHome;
