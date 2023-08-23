// import Header from "../components/Header/Header";
// import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  // const { pathname } = useLocation();
  // const isHeaderFooter = pathname.includes("login") || pathname.includes("signUp");
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* {isHeaderFooter || <Header></Header>}
      <div className="min-h-[calc(100vh-271px)]">
        <Outlet></Outlet>
      </div>
      {isHeaderFooter || <Footer></Footer>} */}
    </div>
  );
};

export default MainLayout;
