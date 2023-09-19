const SectionHeading = ({ subHeading = "", heading = "", type }) => {
  return (
    <div className="max-w-xs mx-auto text-center">
      <div className={`${type ? "border-white text-white" : "border-orange-700 text-orange-700"} border-b  pb-2`}>---{subHeading}---</div>
      <h3 className={`${type ? "border-white" : "border-orange-700"} border-b  py-4 uppercase text-2xl font-semibold`}>{heading}</h3>
    </div>
  );
};

export default SectionHeading;
