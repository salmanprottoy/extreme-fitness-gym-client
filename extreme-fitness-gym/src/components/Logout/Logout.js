import React, { useContext } from "react";
import { UserContext } from "../../App";
import Login from "../Login/Login";

const Logout = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Login />
    </div>
  );
};

export default Logout;
