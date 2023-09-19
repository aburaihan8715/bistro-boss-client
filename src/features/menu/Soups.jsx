// import CommonMenu from "../../components/CommonMenu";
// import soupImg from "../../assets/images/menu/soup-bg.jpg";

import soupImg from "../../assets/images/menu/soup-bg.jpg";
import CommonMenu from "../../ui/CommonMenu";

const bannerText = `Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

const Soups = ({ soupData }) => {
  return (
    <section className="mb-10">
      <CommonMenu
        menu={soupData}
        bannerImage={soupImg}
        bannerHeading={"soups"}
        bannerText={bannerText}
        btnText={"order now"}
        isMenuHeading={false}
        category="soup"
      />
    </section>
  );
};

export default Soups;
