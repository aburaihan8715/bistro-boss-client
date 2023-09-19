import { Helmet } from "react-helmet-async";
import Banner from "../ui/Banner";
import FoodCategorySlider from "../features/menu/FoodCategorySlider";
import FromMenu from "../features/menu/FromMenu";
import CallUs from "../ui/CallUs";
import RecommendFood from "../features/menu/RecommendFood";
import FeaturedItem from "../features/menu/FeaturedItem";
import Testimonials from "../features/testimonials/Testimonials";

// import Banner from "../ui/Banner";
// import FoodCategorySlider from "../features/menu/FoodCategorySlider";
// import FromMenu from "../features/menu/FromMenu";
// import CallUs from "../ui/CallUs";
// import RecommendFood from "../features/menu/RecommendFood";
// import FeaturedItem from "../features/menu/FeaturedItem";
// import Testimonials from "../../features/testimonials/Testimonials";

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
