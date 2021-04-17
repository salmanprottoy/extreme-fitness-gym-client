import React from "react";
import { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { UserContext } from "../../App";
import "./UserDashboard.css";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import Order from "../Order/Order";
import * as ReactBootstrap from "react-bootstrap";
import AddReview from "../AddReview/AddReview";

const UserDashboard = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <h1 className="text-info">
        Welcome, <i> {loggerInUser.name}</i>
      </h1>
      <div className="container mt-3 mb-3">
        {loading ? (
          <br />
        ) : (
          <ReactBootstrap.Spinner animation="border" variant="info" />
        )}
        <div className="">
          <h2 className="text-left text-info m-2">My Purchased Services</h2>
          <Table striped bordered hover className="mt-5 mb-5">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Price</th>
                <th>Ordered Date</th>
              </tr>
            </thead>

            {orders.map((order) => (
              <Order order={order}></Order>
            ))}
          </Table>
        </div>
      </div>
      <div className="container mt-5 mb-3">
        <h2 className="text-left text-info m-2">Add Review</h2>
        <AddReview />
      </div>
    </div>
  );
};

export default UserDashboard;
