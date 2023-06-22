import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageHome from "../pages/PageHome/PageHome";
import PageLogin from "../pages/PageLogin/PageLogin";
import PageSignUp from "../pages/PageSignUp/PageSignUp";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PageMenu from "../pages/PageMenu/PageMenu";
import PageShop from "../pages/PageShop/PageShop";
import PageContactUs from "../pages/PageContactUs/PageContactUs";
import Secret from "../pages/Secret";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import PageMyCart from "../pages/dashboard/PageMyCart/PageMyCart";
import PageAllUser from "../pages/dashboard/PageAllUser/PageAllUser";
import PageAddItems from "../pages/dashboard/PageAddItems/PageAddItems";
import PageAddReview from "../pages/dashboard/PageAddReview/PageAddReview";
import PageAdminHome from "../pages/dashboard/PageAdminHome/PageAdminHome";
import PageManageBookings from "../pages/dashboard/PageManageBookings/PageManageBookings";
import PageManageItems from "../pages/dashboard/PageManageItems/PageManageItems";
import PageMyBookings from "../pages/dashboard/PageMyBookings/PageMyBookings";
import PagePaymentHistory from "../pages/dashboard/PagePaymentHistory/PagePaymentHistory";
import PageReservation from "../pages/dashboard/PageReservation/PageReservation";
import PageUserHome from "../pages/dashboard/PageUserHome/PageUserHome";

const router = createBrowserRouter([
  // main layout routes
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        element: <PageHome></PageHome>,
      },
      {
        path: "signUp",
        element: <PageSignUp></PageSignUp>,
      },
      {
        path: "login",
        element: <PageLogin></PageLogin>,
      },
      {
        path: "menu",
        element: <PageMenu></PageMenu>,
      },
      {
        path: "shop/:category",
        element: <PageShop></PageShop>,
      },

      {
        path: "contact",
        element: <PageContactUs></PageContactUs>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },

  // dashboard layout routes
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      // user routes
      {
        path: "userHome",
        element: <PageUserHome></PageUserHome>,
      },
      {
        path: "myCart",
        element: <PageMyCart></PageMyCart>,
      },

      {
        path: "myBookings",
        element: <PageMyBookings></PageMyBookings>,
      },

      {
        path: "addReview",
        element: <PageAddReview></PageAddReview>,
      },

      // admin routes
      {
        path: "adminHome",
        element: <PageAdminHome></PageAdminHome>,
      },
      {
        path: "manageBookings",
        element: <PageManageBookings></PageManageBookings>,
      },
      {
        path: "allUser",
        element: <PageAllUser></PageAllUser>,
      },
      {
        path: "manageItems",
        element: <PageManageItems></PageManageItems>,
      },
      {
        path: "addItems",
        element: <PageAddItems></PageAddItems>,
      },
      {
        path: "paymentHistory",
        element: <PagePaymentHistory></PagePaymentHistory>,
      },
      {
        path: "reservation",
        element: <PageReservation></PageReservation>,
      },
    ],
  },
]);

export default router;
