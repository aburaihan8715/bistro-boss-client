import { Outlet, useLocation } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHeaderFooter = pathname.includes("login") || pathname.includes("sign-up");
  return (
    <div>
      {/* {!isHeaderFooter && <Header></Header>}
      <Outlet></Outlet>
      {!isHeaderFooter && <Footer></Footer>} */}

      {/* ========OR======== */}

      {isHeaderFooter || <Header></Header>}
      <Outlet></Outlet>
      {isHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
