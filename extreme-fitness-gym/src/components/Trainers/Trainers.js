import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TrainerCard from "../TrainerCard/TrainerCard";
import * as ReactBootstrap from "react-bootstrap";

const Trainers = () => {
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
    <section className="row row-cols-md-3 justify-content-center p-5 m-auto">
      {loading ? (
        <br />
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="info" />
      )}
      {trainers.map((trainer) => (
        <TrainerCard trainer={trainer}></TrainerCard>
      ))}
    </section>
  );
};

export default Trainers;
