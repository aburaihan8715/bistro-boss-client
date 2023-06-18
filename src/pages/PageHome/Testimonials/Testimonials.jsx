import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const subHeading = "What Our Clients Say";
  const heading = "testimonials";

  useEffect(() => {
    fetch("http://localhost:5001/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="py-8">
      <SectionHeading subHeading={subHeading} heading={heading}></SectionHeading>
      <div className="text-center">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="py-6 px-12">
                <div className="flex justify-center">
                  <Rating className="" style={{ maxWidth: 180 }} value={testimonial.rating} readOnly />
                </div>
                <div className="mt-4">
                  <span className="text-5xl">&ldquo;</span>
                </div>
                <div className="">
                  <p>{testimonial.details}</p>
                  <div className="mt-4">
                    <span className="uppercase text-2xl font-semibold text-orange-700">{testimonial.name}</span>
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
