import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const PageAllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5001/users`);
      return data.json();
    },
  });

  const deleteHandler = (user) => {
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
        fetch(`http://localhost:5001/users/${user._id}`, {
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

  const makeAdminHandler = (user) => {
    fetch(`http://localhost:5001/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Bistro | All user</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`How many??`} heading={`MANAGE ALL USERS`}></SectionHeading>

        <div className="text-3xl">
          <span>Total users: </span>
          <span>{users?.length}</span>
        </div>

        {/* table */}
        <div className="overflow-x-auto mt-8">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-300 rounded-t-lg ">
              <tr className="">
                <th>#</th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row start */}
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td className="">
                    {user?.role === "admin" && "admin"}
                    {user?.role !== "admin" && (
                      <button onClick={() => makeAdminHandler(user)} className="btn">
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>

                  <th>
                    <button onClick={() => deleteHandler(user)} className="btn bg-red-600 text-white hover:bg-red-800">
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

export default PageAllUser;
