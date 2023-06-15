import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import menuBannerImg from "../../../assets/images/menu/banner3.jpg";
const MenuBanner = () => {
  return (
    <>
      <CommonBanner bannerImg={menuBannerImg} heading={`our menu`} text={`Would you like to try a dish?`}></CommonBanner>
    </>
  );
};

export default MenuBanner;
