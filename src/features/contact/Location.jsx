import SectionHeading from "../../ui/SectionHeading";

const Location = () => {
  return (
    <div>
      <div className="py-8 max-w-5xl mx-auto">
        <div className="mb-10">
          <SectionHeading subHeading={`Visit Us`} heading={`our location`} />
        </div>

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
    </div>
  );
};

export default Location;
