// import FoodCard from "../../components/FoodCard";
// import LoadingSpinner from "../../components/LoadingSpinner";
// import SectionHeading from "../../components/SectionHeading";
// import useFetchMenuData from "../../hooks/useFetchMenuData";

import useFetchMenuData from "../../hooks/useFetchMenuData";
import FoodCard from "../../ui/FoodCard";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";

const subHeading = "Should Try";
const heading = "chef recommends";

const RecommendFood = () => {
  const { menuData, menuLoading, menuError } = useFetchMenuData();
  const recommendFood = menuData?.slice(0, 6);
  // console.log(recommendFood);

  if (menuLoading) return <LoadingSpinner />;
  if (menuError) return <h3 className="text-center text-red-600 font-medium text-xl">{menuError}</h3>;

  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <SectionHeading subHeading={subHeading} heading={heading} />
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
        {recommendFood?.map((item) => (
          <FoodCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RecommendFood;
