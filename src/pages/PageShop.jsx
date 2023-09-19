import ShopBanner from "../features/shop/ShopBanner";
import ShopByCategory from "../features/shop/ShopByCategory";
import Pagination from "../ui/Pagination";

const PageShop = () => {
  return (
    <div>
      <ShopBanner></ShopBanner>
      <div className="max-w-5xl mx-auto">
        <ShopByCategory></ShopByCategory>
      </div>
      <div className="max-w-5xl mx-auto">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default PageShop;
