import { Helmet } from "react-helmet-async";
import ManageAllUserTable from "../features/admin/ManageAllUserTable";

const PageManageAllUser = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | All user</title>
      </Helmet>
      <ManageAllUserTable />
    </div>
  );
};

export default PageManageAllUser;
