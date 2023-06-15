import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | NotFound</title>
      </Helmet>
      <div>not found</div>
    </div>
  );
};

export default PageNotFound;
