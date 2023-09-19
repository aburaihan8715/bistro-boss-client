import featuredImg from "../../assets/images/home/featured.jpg";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";

const FeaturedItem = () => {
  return (
    <div className="py-14 bg-cover relative bg-fixed" style={{ backgroundImage: `url(${featuredImg})` }}>
      <div className="absolute w-full h-full bg-black top-0 left-0 opacity-50 "></div>
      <div className="max-w-5xl mx-auto px-10 py-10 relative z-10 text-white">
        <div className="mb-10">
          <SectionHeading type={true} subHeading={`Check it out`} heading={`from our menu`} />
        </div>
        <div className="grid sm:grid-cols-2 gap-14 items-center">
          <div className="bg-orange-300">
            <img className="max-h-80" src={featuredImg} alt="food photo" />
          </div>
          <div>
            <div>
              <p>March 20, 2023</p>
              <p>WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque
                repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
            <div className="mt-4">
              <Button className="text-white">read more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
