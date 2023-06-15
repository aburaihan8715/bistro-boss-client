import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../../components/FoodCard/FoodCard";

const ShopByCategory = () => {
  return (
    <div className="py-8">
      <Tabs>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <div className="grid sm:grid-cols-3 gap-8">
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
          </div>
        </TabPanel>
        <TabPanel>
          <FoodCard></FoodCard>
        </TabPanel>
        <TabPanel>
          <FoodCard></FoodCard>
        </TabPanel>
        <TabPanel>
          <FoodCard></FoodCard>
        </TabPanel>
        <TabPanel>
          <FoodCard></FoodCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
