import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useFetchCartData from "../hooks/useFetchCartData";
import useAdmin from "../hooks/useAdmin";

const Header = () => {
  const { user, logOutUser } = useAuth();
  const { carts } = useFetchCartData();
  const navigate = useNavigate();

  const { isAdmin } = useAdmin();

  const logOutHandler = async () => {
    try {
      await logOutUser();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact us</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/salad">Shop</NavLink>
      </li>

      {isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">Admin</NavLink>
        </li>
      )}

      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/myCart">
            <span className="text-orange-400">
              <FaShoppingCart />
            </span>
            <span className="badge badge-secondary">+{carts?.length || 0}</span>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="sm:px-10 sticky w-full top-0 left-0 right-0 z-50 bg-indigo-100">
      <div className="navbar mx-auto font-medium ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 ms-auto bg-slate-50 ">
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="uppercase">
            <div className="inline-flex flex-col">
              <h1 className="text-3xl tracking-tighter">Bistro Boss</h1>
              <span className="tracking-[7px]">restaurant</span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

        <div className="navbar-end space-x-2">
          {!user && (
            <Link to="/login" className="">
              <button className="btn btn-md">login</button>
            </Link>
          )}
          {user && (
            <button className="btn" onClick={logOutHandler}>
              Logout
            </button>
          )}

          {user && (
            <div title={user?.displayName} className="avatar">
              <div className="w-10 rounded-full ring ring-orange-700 ring-offset-white ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
