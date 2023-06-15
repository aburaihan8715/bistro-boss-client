import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const Location = () => {
  return (
    <div className="py-8">
      <SectionHeading subHeading={`Visit Us`} heading={`our location`}></SectionHeading>

      <div className="grid sm:grid-cols-3 gap-8">
        <div className="">
          <div className="bg-orange-400 p-4 text-center">
            <span>📞</span>
          </div>
          <div className="text-center p-8 bg-orange-50 w-[90%] mx-auto h-[150px]">
            <p className="uppercase">phone</p>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        <div>
          <div className="bg-orange-400 p-4 text-center">
            <span>🚩</span>
          </div>
          <div className="text-center p-8 bg-orange-50 w-[90%] mx-auto h-[150px]">
            <p className="uppercase">address</p>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        <div>
          <div className="bg-orange-400 p-4 text-center">
            <span>⌚</span>
          </div>
          <div className="text-center p-8 bg-orange-50 w-[90%] mx-auto h-[150px]">
            <p className="uppercase">working hours</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
