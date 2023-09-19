import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../features/authentication/SocialLogin";
import bgImg from "../assets/images/others/authentication.png";
import bannerImg from "../assets/images/others/authentication2.png";

const PageLogin = () => {
  const [loginInputData, setLoginInputData] = useState({});
  const [disableLoginBtn, setDisableLoginBtn] = useState(true);
  const { authenticationUsingEmailPassword } = useAuth();
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
  const submitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = loginInputData;
    try {
      await authenticationUsingEmailPassword(email, password);
      Swal.fire({
        position: "center",
        title: "Login success!",
        showConfirmButton: false,
        timer: 1500,
      });
      event.target.reset();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }

    // authenticationUsingEmailPassword(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     // reset form
    //     event.target.reset();
    //     Swal.fire({
    //       position: "center",
    //       title: "Login success!",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     console.log(user);
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="pb-16 pt-8" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 shadow-lg items-center py-8 px-16 rounded relative">
          <button onClick={() => navigate(-1)} className="btn btn-xs absolute bg-orange-600 top-2 text-white left-2 hover:bg-orange-800">
            go back
          </button>

          <div>
            <img className="" src={bannerImg} alt="banner" />
          </div>

          <div className="">
            <form onSubmit={submitHandler}>
              <div className="space-y-3">
                <div className="text-center ">
                  <h4 className="text-4xl uppercase">login</h4>
                </div>

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

                <div className="w-full space-y-3">
                  <span className="bg-orange-200 p-1 flex rounded ">
                    <LoadCanvasTemplate />
                  </span>
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
              <Link className="text-orange-700 hover:underline" to="/sign-up">
                Create a New Account
              </Link>
            </p>

            <p className="text-center mb-2">or sign in with</p>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
