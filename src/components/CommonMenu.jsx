import { Link } from "react-router-dom";
import CommonBanner from "./CommonBanner";
import SectionHeading from "./SectionHeading";

const CommonMenu = ({
  bannerHeading,
  bannerText,
  bannerImage,
  bannerBgVariant = false,
  bannerFontSizeVariant = false,
  subHeading = "",
  heading = "",
  menu,
  btnText,
  isMenuHeading = true,
}) => {
  return (
    <>
      <div className="mb-10">
        <CommonBanner
          bannerHeading={bannerHeading}
          bannerText={bannerText}
          bannerImage={bannerImage}
          bannerBgVariant={bannerBgVariant}
          bannerFontSizeVariant={bannerFontSizeVariant}
        />
      </div>

      {isMenuHeading && (
        <div className="mb-10">
          <SectionHeading subHeading={subHeading} heading={heading} />
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <ul className="grid sm:grid-cols-2 gap-4">
          {menu?.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </ul>
        <div className="text-center mt-4">
          <Link className="btn" to="/shop/salad">
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CommonMenu;

// menu item
const MenuItem = ({ item }) => {
  return (
    <li className="flex gap-4 items-start">
      <div className="shrink-0">
        <img className="w-[120px] object-cover rounded-full rounded-tl-none" src={item?.image} alt="food photo" />
      </div>
      <div>
        <p className="text-xl font-semibold">{item?.name} ------</p>
        <p>{item?.recipe}</p>
      </div>
      <p className="text-orange-700">
        <span>$</span>
        <span>{item?.price}</span>
      </p>
    </li>
  );
};
