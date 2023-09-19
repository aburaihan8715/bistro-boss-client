import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import PageHome from "../pages/PageHome";
import PageContactUs from "../pages/PageContactUs";
import PageMenu from "../pages/PageMenu";
import PageShop from "../pages/PageShop";
import PageLogin from "../pages/PageLogin";
import PageSignUp from "../pages/PageSignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import PageMyCart from "../pages/PageMyCart";
import PageUserHome from "../pages/PageUserHome";
import PageMyBookings from "../pages/PageMyBookings";
import PageAddReview from "../pages/PageAddReview";
import PageAdminHome from "../pages/PageAdminHome";
import PageManageBookings from "../pages/PageManageBookings";
import PageAllUser from "../pages/PageAllUser";
import PageManageItems from "../pages/PageManageItems";
import PageAddItems from "../pages/PageAddItems";
import PagePaymentHistory from "../pages/PagePaymentHistory";
import PageReservation from "../pages/PageReservation";

const router = createBrowserRouter([
  // main layout routes
  {
    element: <MainLayout></MainLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        element: <PageHome></PageHome>,
      },
      {
        path: "/contact",
        element: <PageContactUs></PageContactUs>,
      },

      {
        path: "/menu",
        element: <PageMenu></PageMenu>,
      },
      {
        path: "/shop/:category",
        element: <PageShop></PageShop>,
      },
      {
        path: "/login",
        element: <PageLogin></PageLogin>,
      },
      {
        path: "/sign-up",
        element: <PageSignUp></PageSignUp>,
      },
    ],
  },

  // dashboard layout routes
  {
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      // user routes
      {
        path: "dashboard/userHome",
        element: <PageUserHome></PageUserHome>,
      },
      {
        path: "dashboard/myCart",
        element: <PageMyCart></PageMyCart>,
      },

      {
        path: "dashboard/myBookings",
        element: <PageMyBookings></PageMyBookings>,
      },

      {
        path: "dashboard/addReview",
        element: <PageAddReview></PageAddReview>,
      },

      // admin routes
      {
        path: "dashboard/adminHome",
        element: <PageAdminHome></PageAdminHome>,
      },
      {
        path: "dashboard/manageBookings",
        element: <PageManageBookings></PageManageBookings>,
      },
      {
        path: "dashboard/allUser",
        element: <PageAllUser></PageAllUser>,
      },
      {
        path: "dashboard/manageItems",
        element: <PageManageItems></PageManageItems>,
      },
      {
        path: "dashboard/addItems",
        element: <PageAddItems></PageAddItems>,
      },
      {
        path: "dashboard/paymentHistory",
        element: <PagePaymentHistory></PagePaymentHistory>,
      },
      {
        path: "dashboard/reservation",
        element: <PageReservation></PageReservation>,
      },
    ],
  },
]);

export default router;
