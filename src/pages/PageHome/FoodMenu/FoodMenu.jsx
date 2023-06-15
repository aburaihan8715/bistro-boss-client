import Button from "../../../components/Button/Button";
import FoodItem from "../../../components/FoodItem/FoodItem";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const FoodMenu = () => {
  return (
    <div className="py-8">
      <SectionHeading subHeading={`Check it out`} heading={`from our menu`}></SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
      </div>
      <div className="text-center mt-4">
        <Button className="btn-accent">view full menu</Button>
      </div>
    </div>
  );
};

export default FoodMenu;
