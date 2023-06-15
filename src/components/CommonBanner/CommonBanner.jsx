const CommonBanner = ({ heading, text, bannerImg }) => {
  return (
    <div style={{ backgroundImage: `url(${bannerImg})` }} className="text-white bg-cover object-cover">
      <div className="p-20 text-justify">
        <div className="bg-black py-20 px-40 opacity-50">
          <h3 className="uppercase text-2xl font-semibold text-center mb-2">{heading}</h3>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
