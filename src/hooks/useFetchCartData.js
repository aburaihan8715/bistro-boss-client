import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFetchCartData = () => {
  const { user, authLoading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const {
    data: carts = [],
    error: cartError,
    isLoading: cartLoading,
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const data = await axiosSecure.get(`/carts?email=${user?.email}`);
      return data.data;
    },
  });

  return { carts, cartLoading, cartError, refetch };
};

export default useFetchCartData;
