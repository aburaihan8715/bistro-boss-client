import ContactForm from "./ContactForm/ContactForm";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
import Location from "./Location/Location";

const PageContactUs = () => {
  return (
    <div>
      <ContactUsBanner></ContactUsBanner>
      <Location></Location>
      <ContactForm></ContactForm>
    </div>
  );
};

export default PageContactUs;
