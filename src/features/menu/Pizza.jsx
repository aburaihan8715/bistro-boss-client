// import CommonMenu from "../../components/CommonMenu";
// import pizzaImg from "../../assets/images/menu/pizza-bg.jpg";
import pizzaImg from "../../assets/images/menu/pizza-bg.jpg";
import CommonMenu from "../../ui/CommonMenu";

const bannerHeading = "pizza";
const bannerText = `Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
const btnText = "order now";

const Pizza = ({ pizzaData }) => {
  return (
    <section className="mb-10">
      <CommonMenu
        bannerImage={pizzaImg}
        bannerHeading={bannerHeading}
        bannerText={bannerText}
        menu={pizzaData}
        btnText={btnText}
        isMenuHeading={false}
        category="pizza"
      />
    </section>
  );
};

export default Pizza;
