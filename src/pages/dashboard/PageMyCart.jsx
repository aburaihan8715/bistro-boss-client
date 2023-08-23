import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useFetchCartData from "../../hooks/useFetchCartData";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const PageMyCart = () => {
  const [carts, refetch] = useFetchCartData();
  const totalPrice = carts?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const deleteHandler = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
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
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>Bistro | My cart</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`my cart`} heading={`wanna add more`}></SectionHeading>
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
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row start */}
              {carts?.map((item, index) => (
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
                  <th>
                    <button onClick={() => deleteHandler(item)} className="btn bg-red-600 text-white hover:bg-red-800">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
              {/* row end */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageMyCart;
