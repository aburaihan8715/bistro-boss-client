import Button from "../../../components/Button/Button";
import FoodItem from "../../../components/FoodItem/FoodItem";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useFetchMenuData from "../../../hooks/useFetchMenuData";
import { Link } from "react-router-dom";

const FoodMenu = () => {
  const [menuData, loading] = useFetchMenuData();

  const popularMenu = menuData?.filter((item) => item.category === "popular");

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="py-8">
      <SectionHeading subHeading={`Check it out`} heading={`from our menu`}></SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        {popularMenu?.map((singleMenu) => (
          <FoodItem key={singleMenu._id} data={singleMenu}></FoodItem>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/shop/salad">
          <Button className="btn">view full menu</Button>
        </Link>
      </div>
    </div>
  );
};

export default FoodMenu;
