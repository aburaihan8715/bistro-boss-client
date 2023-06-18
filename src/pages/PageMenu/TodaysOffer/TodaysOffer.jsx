import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import FoodItem from "../../../components/FoodItem/FoodItem";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const TodaysOffer = ({ offeredData }) => {
  return (
    <div className="py-8">
      <SectionHeading subHeading={`Don't miss`} heading={`TODAY'S OFFER`}></SectionHeading>
      <div className="grid sm:grid-cols-2 gap-8">
        {offeredData?.map((singleOfferData) => (
          <FoodItem key={singleOfferData._id} data={singleOfferData}></FoodItem>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/shop/offered">
          <Button>order now</Button>
        </Link>
      </div>
    </div>
  );
};

export default TodaysOffer;
