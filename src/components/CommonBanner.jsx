const CommonBanner = ({ bannerHeading, bannerText, bannerImage, bannerBgVariant = false, bannerFontSizeVariant = false }) => {
  return (
    <div style={{ backgroundImage: `url(${bannerImage})` }} className="bg-cover object-cover">
      <div className="p-20 text-justify">
        <div className={`${bannerBgVariant ? "bg-white opacity-100" : "bg-black bg-opacity-50 text-white"} py-20 px-40`}>
          <h3 className={`${bannerFontSizeVariant ? "text-5xl" : "text-2xl"} uppercase  font-semibold text-center mb-2`}>{bannerHeading}</h3>
          <p className="text-center">{bannerText}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
