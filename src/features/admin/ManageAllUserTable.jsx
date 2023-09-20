import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import SectionHeading from "../../ui/SectionHeading";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ErrorMessage from "../../ui/ErrorMessage";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageAllUserTable = () => {
  const { axiosSecure } = useAxiosSecure();
  const {
    data: users = [],
    error: userError,
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await axiosSecure.get(`http://localhost:5000/users`);
      return data.data;
    },
  });
  if (userLoading) return <LoadingSpinner />;
  if (userError) return <ErrorMessage>{userError.message}</ErrorMessage>;
  console.log(users);

  const deleteHandler = async (user) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        });
        const data = res.json();
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const makeAdminHandler = async (user) => {
    try {
      const res = await fetch(`http://localhost:5000/users/admin/${user?._id}`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (data.modifiedCount) {
        Swal.fire({
          position: "center",
          title: `${user.name} is admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (userLoading) return <LoadingSpinner />;
  if (userError) return <ErrorMessage>{userError}</ErrorMessage>;

  return (
    <div className="">
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

export default ManageAllUserTable;
