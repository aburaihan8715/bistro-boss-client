// import CommonMenu from "../../components/CommonMenu";
// import bannerImage from "../../assets/images/menu/banner3.jpg";

import bannerImage from "../../assets/images/menu/banner3.jpg";
import CommonMenu from "../../ui/CommonMenu";

const heading = "TODAY'S OFFER";
const subHeading = "Don't miss";
const bannerHeading = "OUR MENU";
const bannerText = "Would you like to try a dish?";
const btnText = "ORDER YOUR FAVORITE FOOD";

const TodaysOffer = ({ offeredData }) => {
  return (
    <section className="mb-10">
      <CommonMenu
        menu={offeredData}
        bannerHeading={bannerHeading}
        bannerText={bannerText}
        bannerImage={bannerImage}
        heading={heading}
        subHeading={subHeading}
        bannerFontSizeVariant={true}
        btnText={btnText}
        category="offered"
      ></CommonMenu>
    </section>
  );
};

export default TodaysOffer;
