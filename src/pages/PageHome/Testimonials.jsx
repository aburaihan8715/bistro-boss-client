import SectionHeading from "../../components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const subHeading = "What Our Clients Say";
const heading = "testimonials";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(false);
  const [testimonialsError, setTestimonialsError] = useState("");

  useEffect(() => {
    setTestimonialsLoading(true);
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialsLoading(false);
        setTestimonials(data);
      })
      .catch((err) => {
        setTestimonialsLoading(false);
        setTestimonialsError(err.message);
        console.log(err.message);
      });
  }, []);

  if (testimonialsLoading) return <LoadingSpinner />;
  if (testimonialsError) return <ErrorMessage>{testimonialsError}</ErrorMessage>;

  return (
    <div className="py-8">
      <div>
        <SectionHeading subHeading={subHeading} heading={heading}></SectionHeading>
      </div>
      <div className="text-center max-w-5xl mx-auto">
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
                    <span className="uppercase text-xl font-medium text-orange-700">{testimonial.name}</span>
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
