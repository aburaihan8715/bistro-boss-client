import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useState } from "react";
import useFetchMenuData from "../../../hooks/useFetchMenuData";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";

const ShopByCategory = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menuData, loading] = useFetchMenuData();

  const dessertData = menuData?.filter((item) => item.category === "dessert");
  const pizzaData = menuData?.filter((item) => item.category === "pizza");
  const saladData = menuData?.filter((item) => item.category === "salad");
  const soupData = menuData?.filter((item) => item.category === "soup");
  const drinksData = menuData?.filter((item) => item.category === "drinks");
  const offeredData = menuData?.filter((item) => item.category === "offered");

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="py-8">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
          <Tab>OFFERED</Tab>
        </TabList>

        <TabPanel>
          <div className="grid sm:grid-cols-3 gap-8">
            {saladData?.map((singleSaladData) => (
              <FoodCard key={singleSaladData._id} data={singleSaladData}></FoodCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid sm:grid-cols-3 gap-8">
            {pizzaData?.map((singlePizzaData) => (
              <FoodCard key={singlePizzaData._id} data={singlePizzaData}></FoodCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid sm:grid-cols-3 gap-8">
            {soupData?.map((singleSoupData) => (
              <FoodCard key={singleSoupData._id} data={singleSoupData}></FoodCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid sm:grid-cols-3 gap-8">
            {dessertData?.map((singleDessertData) => (
              <FoodCard key={singleDessertData._id} data={singleDessertData}></FoodCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid sm:grid-cols-3 gap-8">
            {drinksData?.map((singleDrinksData) => (
              <FoodCard key={singleDrinksData._id} data={singleDrinksData}></FoodCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid sm:grid-cols-3 gap-8">
            {offeredData?.map((singleOfferData) => (
              <FoodCard key={singleOfferData._id} data={singleOfferData}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
