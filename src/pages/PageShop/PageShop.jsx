// import Pagination from "../../components/Pagination/Pagination";
// import ShopBanner from "./ShopBanner/ShopBanner";
// import ShopByCategory from "./ShopByCategory/ShopByCategory";

import ShopBanner from "./ShopBanner";
import ShopByCategory from "./ShopByCategory";

const PageShop = () => {
  return (
    <div>
      <ShopBanner></ShopBanner>
      <div className="max-w-5xl mx-auto">
        <ShopByCategory></ShopByCategory>
      </div>
      {/*
     
      <Pagination></Pagination> */}
    </div>
  );
};

export default PageShop;
