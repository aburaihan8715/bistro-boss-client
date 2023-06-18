import Pagination from "../../components/Pagination/Pagination";
import ShopBanner from "./ShopBanner/ShopBanner";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

const PageShop = () => {
  return (
    <div>
      <ShopBanner></ShopBanner>
      <ShopByCategory></ShopByCategory>
      <Pagination></Pagination>
    </div>
  );
};

export default PageShop;
