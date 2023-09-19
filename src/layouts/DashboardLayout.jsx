import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaComment,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaStackExchange,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useFetchCartData from "../hooks/useFetchCartData";

const DashboardLayout = () => {
  const { carts } = useFetchCartData();
  // TODO: show nav options based on role
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content bg-base-200">
          {/* Sidebar content here */}
          {/* admin navigation */}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  <span>Admin home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  <span>Add items</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaStackExchange />
                  <span>Manage items</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook />
                  <span>Manage bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUsers />
                  <span>All users</span>
                </NavLink>
              </li>
            </>
          )}
          {/* user navigation */}
          {!isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  <span>User home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt />
                  <span>Reservation</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet />
                  <span>Payment History</span>
                </NavLink>
              </li>
              <li className="">
                <NavLink className="flex" to="/dashboard/myCart">
                  <FaShoppingCart />
                  <span>My cart</span>
                  <div className="badge badge-accent">{carts?.length || 0}</div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addReview">
                  <FaComment />
                  <span>Add review</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/myBookings">
                  <FaCalendarAlt />
                  <span>My booking</span>
                </NavLink>
              </li>
            </>
          )}

          {/* --------divider---------- */}
          <div className="divider"></div>
          {/* common navigation */}
          <li>
            <NavLink to="/">
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars />
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <FaShoppingBag />
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
