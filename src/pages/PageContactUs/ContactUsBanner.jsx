import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import contactUsBannerImg from "../../../assets/images/contact/banner.jpg";

const ContactUsBanner = () => {
  return (
    <div>
      <CommonBanner bannerImg={contactUsBannerImg} heading={`contact us`} text={`Would you like to try a dish?`}></CommonBanner>
    </div>
  );
};

export default ContactUsBanner;
