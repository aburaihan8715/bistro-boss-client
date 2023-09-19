// import ErrorMessage from "../../components/ErrorMessage";
// import LoadingSpinner from "../../components/LoadingSpinner";
// import useFetchMenuData from "../hooks/useFetchMenuData";
// import Desserts from "../features/menu/Desserts";
// import Pizza from "./PageMenu/Pizza";
// import Salads from "./PageMenu/Salads";
// import Soups from "./PageMenu/Soups";
// import TodaysOffer from "./PageMenu/TodaysOffer";

import Desserts from "../features/menu/Desserts";
import Pizza from "../features/menu/Pizza";
import Salads from "../features/menu/Salads";
import Soups from "../features/menu/Soups";
import TodaysOffer from "../features/menu/TodaysOffer";
import useFetchMenuData from "../hooks/useFetchMenuData";
import ErrorMessage from "../ui/ErrorMessage";
import LoadingSpinner from "../ui/LoadingSpinner";

const PageMenu = () => {
  const { menuData, menuLoading, menuError } = useFetchMenuData();

  const offeredData = menuData?.filter((item) => item.category === "offered");
  const dessertData = menuData?.filter((item) => item.category === "dessert");
  const pizzaData = menuData?.filter((item) => item.category === "pizza");
  const saladData = menuData?.filter((item) => item.category === "salad");
  const soupData = menuData?.filter((item) => item.category === "soup");

  if (menuLoading) return <LoadingSpinner></LoadingSpinner>;
  if (menuError) return <ErrorMessage>{menuError}</ErrorMessage>;
  return (
    <div>
      <TodaysOffer offeredData={offeredData} />
      <Desserts dessertData={dessertData}></Desserts>
      <Pizza pizzaData={pizzaData}></Pizza>
      <Salads saladData={saladData}></Salads>
      <Soups soupData={soupData}></Soups>
    </div>
  );
};

export default PageMenu;
