import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/images/others/authentication.png";
import loginImg from "../../assets/images/others/authentication2.png";

const PageLogin = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>

      <div className="p-16" style={{ backgroundImage: `url(${loginBg})` }}>
        <div className="grid sm:grid-cols-2 shadow-lg items-center py-8 px-16 rounded">
          <div>
            <img className="" src={loginImg} alt="banner" />
          </div>

          <div className="">
            <form className="">
              <div className="space-y-3">
                <div className="text-center ">
                  <h4 className="text-4xl capitalize">login</h4>
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
                  <input type="text" placeholder="Enter your name" className="input input-bordered w-full " />
                  <label className="label">
                    <span className="label-text">Reload captcha</span>
                  </label>
                </div>

                <div className="w-full ">
                  <input type="text" placeholder="Type captcha" className="input input-bordered w-full " />
                </div>

                <div className="w-full ">
                  <input type="submit" value="submit" className="btn btn-block bg-orange-300 hover:bg-orange-400" />
                </div>
              </div>
            </form>
            <p className="text-center mt-2">New here? Create a New Account</p>
            <p className="text-center mb-2">or sign in with</p>

            <div className="flex gap-6 justify-center">
              <div className="avatar">
                <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/Y7nTmxp/facebook.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/72bXZqD/google.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/JHJ7PMt/github.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
