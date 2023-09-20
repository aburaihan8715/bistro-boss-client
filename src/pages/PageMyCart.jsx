import { Helmet } from "react-helmet-async";
import MyCartTable from "../features/user/MyCartTable";

const PageMyCart = () => {
  return (
    <>
      <Helmet>
        <title>Bistro | My cart</title>
      </Helmet>
      <MyCartTable />;
    </>
  );
};

export default PageMyCart;
