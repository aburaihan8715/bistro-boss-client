import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const RecommendFood = () => {
  return (
    <div>
      <SectionHeading subHeading={`Should Try`} heading={`chef recommends`}></SectionHeading>
      <div className="grid md:grid-cols-3 gap-8">
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </div>
    </div>
  );
};

export default RecommendFood;
