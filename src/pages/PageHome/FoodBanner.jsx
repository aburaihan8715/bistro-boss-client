import CommonBanner from "../../components/CommonBanner/CommonBanner";
import bannerImg from "../../../assets/images/home/chef-service.jpg";

const heading = "Bistro Boss";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.";

const FoodBanner = () => {
  return (
    <>
      <CommonBanner heading={heading} text={text} bannerImg={bannerImg}></CommonBanner>
    </>
  );
};

export default FoodBanner;
