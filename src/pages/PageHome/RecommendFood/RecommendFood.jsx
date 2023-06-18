import FoodCard from "../../../components/FoodCard/FoodCard";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useFetchMenuData from "../../../hooks/useFetchMenuData";

const RecommendFood = () => {
  const [menuData, loading] = useFetchMenuData();
  const recommendFood = menuData?.slice(0, 6);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <SectionHeading subHeading={`Should Try`} heading={`chef recommends`}></SectionHeading>
      <div className="grid md:grid-cols-3 gap-8">
        {recommendFood?.map((singleRecommendFood) => (
          <FoodCard key={singleRecommendFood._id} data={singleRecommendFood}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default RecommendFood;
