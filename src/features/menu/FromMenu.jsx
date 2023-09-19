// import CommonMenu from "../../components/CommonMenu";
// import LoadingSpinner from "../../components/LoadingSpinner";
// import useFetchMenuData from "../../hooks/useFetchMenuData";
// import bannerImage from "../../assets/images/home/chef-service.jpg";
import bannerImage from "../../assets/images/home/chef-service.jpg";
import useFetchMenuData from "../../hooks/useFetchMenuData";
import CommonMenu from "../../ui/CommonMenu";
import LoadingSpinner from "../../ui/LoadingSpinner";

const bannerHeading = "Bistro Boss";
const bannerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.";

const heading = `from our menu`;
const subHeading = `Check it out`;
const btnText = "view all menu";

const FromMenu = () => {
  const { menuData, menuLoading, menuError } = useFetchMenuData();

  const popularMenu = menuData?.filter((item) => item.category === "popular");

  if (menuLoading) return <LoadingSpinner></LoadingSpinner>;
  if (menuError) return <h3 className="text-center text-red-600 font-medium text-xl">{menuError}</h3>;

  return (
    <section className="mb-10">
      <CommonMenu
        bannerImage={bannerImage}
        bannerText={bannerText}
        bannerHeading={bannerHeading}
        subHeading={subHeading}
        heading={heading}
        menu={popularMenu}
        btnText={btnText}
        bannerBgVariant={true}
      ></CommonMenu>
    </section>
  );
};

export default FromMenu;
