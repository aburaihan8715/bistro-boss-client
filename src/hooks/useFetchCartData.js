import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useFetchCartData = () => {
  const { user } = useAuth();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5001/carts?email=${user?.email}`);
      return data.json();
    },
  });

  return [carts, refetch];
};

export default useFetchCartData;
