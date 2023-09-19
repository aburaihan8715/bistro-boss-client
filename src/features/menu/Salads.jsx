// import CommonMenu from "../../components/CommonMenu";
// import saladImg from "../../assets/images/menu/salad-bg.jpg";
import saladImg from "../../assets/images/menu/salad-bg.jpg";
import CommonMenu from "../../ui/CommonMenu";

const bannerHeading = "salads";
const bannerText =
  "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const btnText = "order now";

const Salads = ({ saladData }) => {
  return (
    <section className="mb-10">
      <CommonMenu
        menu={saladData}
        bannerImage={saladImg}
        bannerHeading={bannerHeading}
        bannerText={bannerText}
        btnText={btnText}
        isMenuHeading={false}
        category="salad"
      />
    </section>
  );
};

export default Salads;
