import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import shopBannerImg from "../../../assets/images/shop/banner2.jpg";

const ShopBanner = () => {
  return (
    <>
      <CommonBanner bannerImg={shopBannerImg} heading={`our shop`} text={`Would you like to try a dish?`}></CommonBanner>
    </>
  );
};

export default ShopBanner;
