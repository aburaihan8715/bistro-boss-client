import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFetchCartData = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const data = await axiosSecure(`/carts?email=${user?.email}`);
      return data.data;
    },
  });

  return [carts, refetch];
};

export default useFetchCartData;
