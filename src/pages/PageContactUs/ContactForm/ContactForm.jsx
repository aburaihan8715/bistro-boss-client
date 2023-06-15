import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const ContactForm = () => {
  return (
    <div>
      <SectionHeading subHeading={`Send Us a Message`} heading={`contact form`}></SectionHeading>

      <div className="bg-orange-50 p-8 rounded">
        <form>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 ">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input type="text" placeholder="Enter your name" className="input input-bordered w-full " />
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input type="text" placeholder="Enter your email" className="input input-bordered w-full " />
              </div>
            </div>

            <div className="">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Phone*</span>
                </label>
                <input type="text" placeholder="Enter your name" className="input input-bordered w-full " />
              </div>
            </div>

            <div className="">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Message*</span>
                </label>
                <textarea placeholder="Your message" rows="6" className="textarea textarea-bordered w-full"></textarea>
              </div>
            </div>

            <div className=" inline-flex bg-white mt-4 p-2 gap-10 items-center">
              <div className="inline-flex gap-2 items-center">
                <input type="checkbox" className="w-5 h-5" />
                <label htmlFor="">I am not a robot</label>
              </div>
              <div>🔄</div>
            </div>
            <div className="text-center">
              <button className="btn rounded-none bg-amber-900 text-white hover:bg-amber-950 duration-75">Send Message 🚀</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
