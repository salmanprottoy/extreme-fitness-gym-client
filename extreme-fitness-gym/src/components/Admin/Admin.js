import React, { useContext } from "react";
import { UserContext } from "../../App";
import AdminHeader from "./AdminHeader";
import { useHistory, useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";

const Admin = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://intense-river-14020.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggerInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        setLoading(true);
      });
  }, []);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  return (
    <div>
      <AdminHeader />
      {isAdmin ? (
        <p></p>
      ) : (
        <div className="container mt-5 mb-5">
          {loading ? (
            <div>
              <h2 className="text-danger mb-5">
                You are not an administrator!
              </h2>
              <h3 className="text-danger mb-5">
                Please, go home by clicking NavbarBrand and an login as
                administrator.
              </h3>
            </div>
          ) : (
            <ReactBootstrap.Spinner animation="border" variant="info" />
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
