import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FoodCategorySlider from "./FoodCategorySlider";
import FromMenu from "./FromMenu";
import CallUs from "./CallUs";
import RecommendFood from "./RecommendFood";
import FeaturedItem from "./FeaturedItem";
import Testimonials from "./Testimonials";

const PageHome = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <FoodCategorySlider></FoodCategorySlider>
      <FromMenu></FromMenu>
      <CallUs></CallUs>
      <RecommendFood></RecommendFood>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default PageHome;
