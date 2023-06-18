import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useFetchMenuData from "../../hooks/useFetchMenuData";
import Desserts from "./Desserts/Desserts";
import MenuBanner from "./MenuBanner/MenuBanner";
import Pizza from "./Pizza/Pizza";
import Salads from "./Salads/Salads";
import Soups from "./Soups/Soups";
import TodaysOffer from "./TodaysOffer/TodaysOffer";

const PageMenu = () => {
  const [menuData, loading] = useFetchMenuData();

  const offeredData = menuData?.filter((item) => item.category === "offered");
  const dessertData = menuData?.filter((item) => item.category === "dessert");
  const pizzaData = menuData?.filter((item) => item.category === "pizza");
  const saladData = menuData?.filter((item) => item.category === "salad");
  const soupData = menuData?.filter((item) => item.category === "soup");

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <MenuBanner></MenuBanner>
      <TodaysOffer offeredData={offeredData}></TodaysOffer>
      <Desserts dessertData={dessertData}></Desserts>
      <Pizza pizzaData={pizzaData}></Pizza>
      <Salads saladData={saladData}></Salads>
      <Soups soupData={soupData}></Soups>
    </div>
  );
};

export default PageMenu;
