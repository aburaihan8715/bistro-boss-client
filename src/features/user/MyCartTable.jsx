import { useState } from "react";
import useFetchCartData from "../../hooks/useFetchCartData";
import ErrorMessage from "../../ui/ErrorMessage";
import LoadingSpinner from "../../ui/LoadingSpinner";
import SectionHeading from "../../ui/SectionHeading";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const MyCartTable = () => {
  const { carts, cartLoading, cartError, refetch } = useFetchCartData();
  const totalPrice = carts?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  if (cartLoading) return <LoadingSpinner />;
  if (cartError) return <ErrorMessage />;
  return (
    <div className="">
      <div>
        <div className="mb-5">
          <SectionHeading subHeading={`my cart`} heading={`wanna add more`} />
        </div>
        <div className="flex text-3xl space-x-20">
          <div className="">
            <span>Total Orders: </span>
            <span>{carts?.length}</span>
          </div>
          <div>
            <span>Total Price: </span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div>
            <button className="btn bg-orange-300">pay</button>
          </div>
        </div>

        {/* table */}
        <div className="overflow-x-auto mt-8">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-300 rounded-t-lg ">
              <tr className="">
                <th>#</th>
                <th>image</th>
                <th>name</th>
                <th>price</th>
                <th className="text-end">action</th>
              </tr>
            </thead>
            <tbody>
              {/* row start */}
              {carts?.map((item, index) => (
                <MyCartRow key={item._id} item={item} index={index} refetch={refetch} />
              ))}
              {/* row end */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCartTable;

// =========cart row=========
const MyCartRow = ({ item, index, refetch }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const deleteHandler = (item) => {
    setDeleteLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setDeleteLoading(false);

            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.");
            }
          })
          .catch((error) => {
            setDeleteLoading(false);
            setDeleteError(error.message);
            console.log(error.message);
          });
      } else {
        setDeleteLoading(false);
      }
    });
  };

  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td className="">$ {item.price}</td>
      <th className="text-end">
        <button key={item._id} onClick={() => deleteHandler(item)} className="btn bg-red-600 text-white hover:bg-red-800">
          {!deleteLoading && <FaTrashAlt></FaTrashAlt>}
          {deleteLoading && <img className="rounded-full w-5" src="/spinner.gif" alt="delete" />}
          {deleteError && "Error"}
        </button>
      </th>
    </tr>
  );
};
