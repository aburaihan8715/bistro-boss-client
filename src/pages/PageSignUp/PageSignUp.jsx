import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/images/others/authentication.png";
import bannerImg from "../../assets/images/others/authentication2.png";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const PageSignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | SignUp</title>
      </Helmet>

      <div className="p-16" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="grid sm:grid-cols-2 shadow-lg items-center py-8 px-16 rounded">
          <div className="order-1">
            <img className="" src={bannerImg} alt="banner" />
          </div>

          <div className="">
            <form className="">
              <div className="space-y-3">
                <div className="text-center ">
                  <h4 className="text-4xl capitalize">Sign up</h4>
                </div>

                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Enter your name" className="input input-bordered w-full " />
                </div>

                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="Enter your email" className="input input-bordered w-full " />
                </div>

                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="Enter your password" className="input input-bordered w-full " />
                </div>

                <div className="w-full ">
                  <input type="submit" value="Sign Up" className="btn btn-block bg-orange-300 hover:bg-orange-400 text-white" />
                </div>
              </div>
            </form>
            <p className="text-center mt-2">
              Already registered?
              <Link className="text-orange-700 hover:underline" to="/login">
                Go to login
              </Link>
            </p>
            <p className="text-center mb-2">or sign in with</p>
            {/* social login */}
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
