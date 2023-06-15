import Desserts from "./Desserts/Desserts";
import MenuBanner from "./MenuBanner/MenuBanner";
import Pizza from "./Pizza/Pizza";
import Salads from "./Salads/Salads";
import Soups from "./Soups/Soups";
import TodaysOffer from "./TodaysOffer/TodaysOffer";

const PageMenu = () => {
  return (
    <div>
      <MenuBanner></MenuBanner>
      <TodaysOffer></TodaysOffer>
      <Desserts></Desserts>
      <Pizza></Pizza>
      <Salads></Salads>
      <Soups></Soups>
    </div>
  );
};

export default PageMenu;
