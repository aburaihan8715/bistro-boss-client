import Button from "../../../components/Button/Button";
import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import FoodItem from "../../../components/FoodItem/FoodItem";
import desertImg from "../../../assets/images/menu/dessert-bg.jpeg";
import { Link } from "react-router-dom";

const Desserts = ({ dessertData }) => {
  return (
    <div>
      <div className="py-8">
        <CommonBanner
          bannerImg={desertImg}
          heading={`dessert`}
          text={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        ></CommonBanner>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {dessertData.map((singleDessertData) => (
          <FoodItem key={singleDessertData._id} data={singleDessertData}></FoodItem>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/shop/dessert">
          <Button>order now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Desserts;
