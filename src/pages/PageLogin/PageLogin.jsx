import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/images/others/authentication.png";
import bannerImg from "../../assets/images/others/authentication2.png";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const PageLogin = () => {
  const [loginInputData, setLoginInputData] = useState({});
  const [disableLoginBtn, setDisableLoginBtn] = useState(true);
  const { authenticationUsingEmailPassword, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // blur handler
  const blurHandler = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newLoginInputData = { ...loginInputData };
    newLoginInputData[field] = value;
    setLoginInputData(newLoginInputData);
  };

  // captcha validation handler
  const captchaHandler = (event) => {
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisableLoginBtn(false);
    } else {
      setDisableLoginBtn(true);
    }
  };

  // login handler
  const loginHandler = (event) => {
    event.preventDefault();
    const { email, password } = loginInputData;
    authenticationUsingEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        // reset form
        event.target.reset();
        Swal.fire({
          position: "center",
          title: "Login success!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(user);
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>

      <div className="p-16" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="grid sm:grid-cols-2 shadow-lg items-center py-8 px-16 rounded">
          <div>
            <img className="" src={bannerImg} alt="banner" />
          </div>

          <div className="">
            <form onSubmit={loginHandler}>
              <div className="space-y-3">
                <div className="text-center ">
                  <h4 className="text-4xl capitalize">login</h4>
                </div>

                {/* email input */}
                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered w-full "
                    required
                  />
                </div>

                {/* password input */}
                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    onBlur={blurHandler}
                    name="password"
                    type="text"
                    placeholder="Enter your password"
                    className="input input-bordered w-full "
                    required
                  />
                </div>

                {/* captcha input */}
                <div className="w-full ">
                  <LoadCanvasTemplate />
                  <input
                    onBlur={captchaHandler}
                    name="captcha"
                    type="text"
                    placeholder="Type captcha"
                    className="input input-bordered w-full"
                    required
                  />
                  <span className="btn btn-accent btn-xs mt-2">Check</span>
                </div>

                {/* submit button */}
                <div className="w-full ">
                  <input
                    disabled={disableLoginBtn}
                    type="submit"
                    value="Login"
                    className="btn btn-block bg-orange-300 hover:bg-orange-400 text-white"
                  />
                </div>
              </div>
            </form>

            <p className="text-center mt-2">
              New here?
              <Link className="text-orange-700 hover:underline" to="/signUp">
                Create a New Account
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

export default PageLogin;
