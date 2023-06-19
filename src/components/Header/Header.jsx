import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOutUser } = useAuth();

  const logOutHandler = () => {
    logOutUser()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>

      <li>
        <NavLink to="/shop/salad">Our Shop</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>

      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>

      {!user && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {user && (
        <li>
          <button onClick={logOutHandler}>Logout</button>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar max-w-[1140px] fixed z-10 bg-opacity-75 bg-gray-700 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ms-auto">
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
        <div className="navbar-end">
          <a className="btn">get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
