import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../features/authentication/SocialLogin";
import bgImg from "../assets/images/others/authentication.png";
import bannerImg from "../assets/images/others/authentication2.png";
import LoginForm from "../features/authentication/LoginForm";

const PageLogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="pb-16 pt-8" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 shadow-lg items-center py-8 px-16 rounded relative">
          <div className="absolute top-2 left-2">
            <button onClick={() => navigate(-1)} className="btn btn-xs bg-orange-600  text-white  hover:bg-orange-800">
              go back
            </button>

            <button onClick={() => navigate("/")} className="btn btn-xs  bg-orange-600  text-white  hover:bg-orange-800">
              home
            </button>
          </div>

          <div>
            <img className="" src={bannerImg} alt="banner" />
          </div>

          <div className="">
            <LoginForm />
            <p className="text-center mt-2">
              New here?
              <Link className="text-orange-700 hover:underline" to="/sign-up">
                Create a New Account
              </Link>
            </p>
            <p className="text-center mb-2">or sign in with</p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
