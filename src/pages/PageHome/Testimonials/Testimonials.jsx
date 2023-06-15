import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const subHeading = "What Our Clients Say";
const heading = "testimonials";

const Testimonials = () => {
  return (
    <div className="py-8">
      <SectionHeading subHeading={subHeading} heading={heading}></SectionHeading>
      <div className="text-center">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {[...Array(6)].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="py-6 px-12">
                <div className="flex justify-center">
                  <Rating className="" style={{ maxWidth: 180 }} value={3} readOnly />
                </div>
                <div className="mt-4">
                  <span className="text-5xl">&ldquo;</span>
                </div>
                <div className="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima deleniti a totam nulla ut aliquam eius maxime quisquam nisi
                    quo minus animi, porro, obcaecati, reprehenderit aut culpa temporibus adipisci! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Alias minima deleniti a totam nulla ut aliquam eius maxime quisquam nisi quo minus animi, porro, obcaecati, reprehenderit
                    aut culpa temporibus adipisci!
                  </p>
                  <div className="mt-4">
                    <span className="uppercase text-2xl font-semibold text-orange-700">jane doe</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
