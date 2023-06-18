import Button from "../../../components/Button/Button";
import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import FoodItem from "../../../components/FoodItem/FoodItem";
import pizzaImg from "../../../assets/images/menu/pizza-bg.jpg";
import { Link } from "react-router-dom";

const Pizza = ({ pizzaData }) => {
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
        {pizzaData.map((singlePizzaData) => (
          <FoodItem key={singlePizzaData._id} data={singlePizzaData}></FoodItem>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/shop/pizza">
          <Button>order now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Pizza;
