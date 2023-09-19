import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | NotFound</title>
      </Helmet>
      <h3>404 Not found</h3>
      <p>Something went wrong!!</p>
    </div>
  );
};

export default PageNotFound;
