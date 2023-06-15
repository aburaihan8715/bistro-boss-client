import Button from "../../../components/Button/Button";
import FoodItem from "../../../components/FoodItem/FoodItem";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const TodaysOffer = () => {
  return (
    <div className="py-8">
      <SectionHeading subHeading={`Don't miss`} heading={`TODAY'S OFFER`}></SectionHeading>
      <div className="grid sm:grid-cols-2 gap-8">
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
      </div>
      <div className="text-center mt-6">
        <Button>ORDER YOUR favorite FOOD</Button>
      </div>
    </div>
  );
};

export default TodaysOffer;
