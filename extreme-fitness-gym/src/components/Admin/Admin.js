import React, { useContext } from "react";
import { UserContext } from "../../App";
import AdminHeader from "./AdminHeader";
import { useHistory, useLocation } from "react-router";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const Admin = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (loggerInUser.email !== "salman.prottoy@gmail.com") {
    localStorage.clear();
    //history.replace(from);
  }
  return (
    <div>
      <AdminHeader />
    </div>
  );
};

export default Admin;
