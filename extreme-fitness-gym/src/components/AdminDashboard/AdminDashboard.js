import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggerInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
      });
  }, []);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data);
      });
  }, []);

  return (
    <div className="container mt-5 mb-5">
      {isAdmin && (
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-blue rounded">
              <div className="inner">
                <h3> {services.length} </h3>
                <p> Services </p>
              </div>
              <div className="icon">
                <i className="fas fa-dumbbell" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-green rounded">
              <div className="inner">
                <h3> {trainers.length} </h3>
                <p> Trainers </p>
              </div>
              <div className="icon">
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-orange rounded">
              <div className="inner">
                <h3> {reviews.length} </h3>
                <p> Reviews </p>
              </div>
              <div className="icon">
                <i className="fas fa-comments" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-red rounded">
              <div className="inner">
                <h3> {admins.length} </h3>
                <p> Admins </p>
              </div>
              <div className="icon">
                <i className="fas fa-user-shield"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
