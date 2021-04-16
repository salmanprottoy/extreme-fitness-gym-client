import React from "react";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import TrainerElement from "../TrainerElement/TrainerElement";

const ManageTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
      });
  }, []);
  return (
    <div className="container mt-3">
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
