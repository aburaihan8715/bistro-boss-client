import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFetchCartData from "../hooks/useFetchCartData";
import Swal from "sweetalert2";
import Button from "./Button";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { refetch } = useFetchCartData();
  const { image, name, recipe, price } = item;

  const addToCartHandler = (item) => {
    const { image, name, price, _id } = item;
    if (user && user.email) {
      const addItem = { productId: _id, image, name, price, email: user?.email };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(addItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      Swal.fire({
        title: "Please login!!.",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="border flex flex-col justify-between space-y-4 bg-orange-50 pb-8 rounded overflow-hidden relative">
      <div>
        <img className="w-full h-60 object-cover" src={image} alt="food photo" />
      </div>
      <div className="px-8 space-y-2">
        <h4 className="text-2xl capitalize font-semibold">{name}</h4>
        <p>{recipe}</p>
      </div>

      <div className="text-center">
        <Button onClick={() => addToCartHandler(item)} className="text-orange-500 bg-slate-100">
          add to cart
        </Button>
      </div>

      <div className="badge badge-secondary absolute top-0 right-5">$ {price}</div>
    </div>
  );
};

export default FoodCard;
