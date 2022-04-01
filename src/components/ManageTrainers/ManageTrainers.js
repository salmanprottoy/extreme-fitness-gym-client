import React from "react";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import TrainerElement from "../TrainerElement/TrainerElement";
import * as ReactBootstrap from "react-bootstrap";

const ManageTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://intense-river-14020.herokuapp.com/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="container mt-3">
      {loading ? (
        <br />
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="info" />
      )}
      <Table striped bordered hover className="mt-1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Designation</th>
            <th>Rating</th>
            <th>Quotes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <TrainerElement trainer={trainer}></TrainerElement>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageTrainers;
