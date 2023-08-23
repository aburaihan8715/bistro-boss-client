import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { authenticationUsingGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // authentication using google handler
  const authenticationUsingGoogleHandler = () => {
    authenticationUsingGoogle()
      .then((result) => {
        const user = result.user;
        const userData = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="flex gap-6 justify-center">
        <button className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/Y7nTmxp/facebook.png" />
          </div>
        </button>
        <button onClick={authenticationUsingGoogleHandler} className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/72bXZqD/google.png" />
          </div>
        </button>

        <button className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/JHJ7PMt/github.png" />
          </div>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
