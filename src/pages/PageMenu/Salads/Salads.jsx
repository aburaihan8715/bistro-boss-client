import Button from "../../../components/Button/Button";
import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import FoodItem from "../../../components/FoodItem/FoodItem";
import saladImg from "../../../assets/images/menu/salad-bg.jpg";
import { Link } from "react-router-dom";

const Salads = ({ saladData }) => {
  return (
    <div>
      <div className="py-8">
        <CommonBanner
          bannerImg={saladImg}
          heading={`salads`}
          text={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        ></CommonBanner>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {saladData.map((singleSaladData) => (
          <FoodItem key={singleSaladData._id} data={singleSaladData}></FoodItem>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/shop/salad">
          <Button>order now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Salads;
