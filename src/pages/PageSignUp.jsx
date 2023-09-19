import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom/dist";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../features/authentication/SocialLogin";
import bgImg from "../assets/images/others/authentication.png";
import bannerImg from "../assets/images/others/authentication2.png";

const PageSignUp = () => {
  const navigate = useNavigate();
  const { createUserUsingEmailPassword, updateUserProfile } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    // console.log(data);
    const { email, password, name, photo } = data;
    const userData = { name, email };
    try {
      await createUserUsingEmailPassword(email, password);
      await updateUserProfile(name, photo);

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          position: "center",
          title: "User creation success!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }

    // const { email, password, name, photo } = data;
    // createUserUsingEmailPassword(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     // function call for update user profile
    //     updateUserProfile(name, photo).then(() => {
    //       const userData = { name, email };
    //       fetch("http://localhost:5000/users", {
    //         method: "POST",
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(userData),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.insertedId) {
    //             reset();
    //             Swal.fire({
    //               position: "center",
    //               title: "User creation success!",
    //               showConfirmButton: false,
    //               timer: 1500,
    //             });
    //             navigate("/");
    //           }
    //         })
    //         .catch((error) => {
    //           console.log(error.message);
    //         });
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro | SignUp</title>
      </Helmet>

      <div className="pb-16 pt-8" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="max-w-4xl mx-auto  grid sm:grid-cols-2 shadow-lg items-center py-8 px-16 rounded relative">
          <div className="order-1">
            <img className="" src={bannerImg} alt="banner" />
          </div>

          <button onClick={() => navigate(-1)} className="btn btn-xs absolute bg-orange-600 top-2 text-white left-2 hover:bg-orange-800">
            go back
          </button>

          <div className="">
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="space-y-3">
                <div className="text-center ">
                  <h4 className="text-4xl uppercase">Sign up</h4>
                </div>

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

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
