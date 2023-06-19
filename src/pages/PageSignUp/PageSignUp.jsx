import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/images/others/authentication.png";
import bannerImg from "../../assets/images/others/authentication2.png";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom/dist";

const PageSignUp = () => {
  const navigate = useNavigate();
  const { createUserUsingEmailPassword, updateUserProfile } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpHandler = (data) => {
    // console.log(data);
    const { email, password, name, photo } = data;
    createUserUsingEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // function call for update user profile
        updateUserProfile(name, photo).then(() => {
          console.log("user profile updated");
          reset();
          alert("user creation success!");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
            <form onSubmit={handleSubmit(signUpHandler)}>
              <div className="space-y-3">
                <div className="text-center ">
                  <h4 className="text-4xl capitalize">Sign up</h4>
                </div>

                {/* name input */}
                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full "
                  />
                  {errors.name?.type === "required" && <span className="text-error">Name is required</span>}
                </div>

                {/* photo url input */}
                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    type="url"
                    placeholder="Enter photo url"
                    className="input input-bordered w-full "
                  />
                  {errors.name?.type === "required" && <span className="text-error">Photo url is required</span>}
                </div>

                {/* email input */}
                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full "
                  />
                  {errors.email?.type === "required" && <span className="text-error">Email is required</span>}
                </div>

                {/* password input */}
                <div className="w-full ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/i,
                    })}
                    placeholder="Enter your password"
                    className="input input-bordered w-full "
                    type="text"
                  />
                  {errors.password?.type === "required" && <span className="text-error">Password is required</span>}

                  {errors.password?.type === "minLength" && <span className="text-error">Password need to be minimum 6 characters!</span>}

                  {errors.password?.type === "maxLength" && <span className="text-error">Password should not exceeds 20 characters!</span>}

                  {errors.password?.type === "pattern" && (
                    <span className="text-error">Password should have one uppercase, one lowercase, one special character and one digits!</span>
                  )}
                </div>

                {/* sign up button*/}
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
