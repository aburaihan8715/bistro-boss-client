// import CommonBanner from "../../../components/CommonBanner/CommonBanner";
// import shopBannerImg from "../../../assets/images/shop/banner2.jpg";

import CommonBanner from "../../components/CommonBanner";

// bannerHeading: any;
// bannerText: any;
// bannerImage: any;
// bannerBgVariant?: boolean | undefined;
// bannerFontSizeVariant?: boolean | undefined;

import shopBannerImg from "../../assets/images/shop/banner2.jpg";
const bannerText = "Would you like to try a dish?";
const bannerHeading = "our shop";

const ShopBanner = () => {
  return (
    <>
      <CommonBanner bannerImage={shopBannerImg} bannerHeading={bannerHeading} bannerText={bannerText} bannerFontSizeVariant={true}></CommonBanner>
    </>
  );
};

export default ShopBanner;
