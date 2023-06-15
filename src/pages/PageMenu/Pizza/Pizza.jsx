import Button from "../../../components/Button/Button";
import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import FoodItem from "../../../components/FoodItem/FoodItem";
import pizzaImg from "../../../assets/images/menu/pizza-bg.jpg";

const Pizza = () => {
  return (
    <div>
      <div className="py-8">
        <CommonBanner
          bannerImg={pizzaImg}
          heading={`pizza`}
          text={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        ></CommonBanner>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
        <FoodItem></FoodItem>
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

export default Pizza;
