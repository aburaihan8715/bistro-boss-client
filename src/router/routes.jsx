import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageHome from "../pages/PageHome/PageHome";
import PageLogin from "../pages/PageLogin/PageLogin";
import PageSignUp from "../pages/PageSignUp/PageSignUp";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PageMenu from "../pages/PageMenu/PageMenu";
import PageShop from "../pages/PageShop/PageShop";
import PageContactUs from "../pages/PageContactUs/PageContactUs";

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
        path: "/signUp",
        element: <PageSignUp></PageSignUp>,
      },
      {
        path: "/login",
        element: <PageLogin></PageLogin>,
      },
      {
        path: "/menu",
        element: <PageMenu></PageMenu>,
      },
      {
        path: "/shop",
        element: <PageShop></PageShop>,
      },
      {
        path: "/contact",
        element: <PageContactUs></PageContactUs>,
      },
    ],
  },
]);

export default router;
