// import CommonBanner from "../../components/CommonBanner";
// import Location from "../features/contact/Location";
// import ContactForm from "../features/contact/ContactForm";
// import contactUsBannerImg from "../../assets/images/contact/banner.jpg";
import contactUsBannerImg from "../assets/images/contact/banner.jpg";
import ContactForm from "../features/contact/ContactForm";
import Location from "../features/contact/Location";
import CommonBanner from "../ui/CommonBanner";

const PageContactUs = () => {
  return (
    <div>
      <CommonBanner
        bannerImage={contactUsBannerImg}
        bannerHeading={`contact us`}
        bannerText={`Would you like to try a dish?`}
        bannerFontSizeVariant={true}
      />
      <Location></Location>
      <ContactForm></ContactForm>
    </div>
  );
};

export default PageContactUs;
