import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

const OrderConfirmation = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggerInUser,
      product: course.name,
      price: course.price,
      paymentId,
      orderTime: new Date(),
    };

    fetch("http://localhost:5000/services/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order confirmed");
          history.push("/profile");
        }
      });
  };

  const handleOrderConfirm = () => {};

  return (
    <div className="container mt-5 mb-5">
      <div>
        <h2 className="text-info text-left m-2 p-2">Checkout</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{course.name}</td>
              <td>1</td>
              <td>${course.price}</td>
            </tr>
          </tbody>
        </Table>
        {/* <div className="d-flex justify-content-end">
          <button className="btn btn-info" onClick={handleOrderConfirm}>
            Proceed to Payment
          </button>
        </div> */}
        <div>
          <Checkout handlePayment={handlePaymentSuccess}></Checkout>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
