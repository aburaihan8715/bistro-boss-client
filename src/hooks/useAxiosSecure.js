import { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    // note: actually config is request object
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOutUser();
          // navigate("/");
        }
        return Promise.reject(error);
      }
    );
  }, [logOutUser]);

  return { axiosSecure };
};

export default useAxiosSecure;
