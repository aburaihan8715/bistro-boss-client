import Header from "../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHeaderFooter = pathname.includes("login") || pathname.includes("signUp");
  return (
    <div>
      {isHeaderFooter || <Header></Header>}
      <Outlet></Outlet>
      {isHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
