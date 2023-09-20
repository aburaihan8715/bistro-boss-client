import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, authLoading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  // use axios secure with react query
  const {
    data: isAdmin,
    error: adminError,
    isLoading: isAdminLoading,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return { isAdmin, isAdminLoading, adminError };
};
export default useAdmin;
