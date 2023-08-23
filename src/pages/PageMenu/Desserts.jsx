import CommonMenu from "../../components/CommonMenu";
import desertImg from "../../assets/images/menu/dessert-bg.jpeg";

const bannerText =
  "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const bannerHeading = "dessert";
const btnText = "order now";

const Desserts = ({ dessertData }) => {
  return (
    <section className="mb-10">
      <CommonMenu
        bannerImage={desertImg}
        bannerText={bannerText}
        bannerHeading={bannerHeading}
        menu={dessertData}
        isMenuHeading={false}
        btnText={btnText}
      />
    </section>
  );
};

export default Desserts;
