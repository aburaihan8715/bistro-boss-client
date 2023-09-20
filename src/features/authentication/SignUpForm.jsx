import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUpForm = () => {
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
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="space-y-3">
        <div className="text-center ">
          <h4 className="text-4xl uppercase">Sign up</h4>
        </div>

        <div className="w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered w-full " />
          {errors.name?.type === "required" && <span className="text-error">Name is required</span>}
        </div>

        <div className="w-full ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input {...register("photo", { required: true })} type="url" placeholder="Enter photo url" className="input input-bordered w-full " />
          {errors.name?.type === "required" && <span className="text-error">Photo url is required</span>}
        </div>

        <div className="w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="Enter your email" className="input input-bordered w-full " />
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
  );
};

export default SignUpForm;
