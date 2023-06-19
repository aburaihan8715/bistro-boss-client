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

const router = createBrowserRouter([
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
]);

export default router;
