import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TrainerCard from "../TrainerCard/TrainerCard";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
      });
  }, []);
  return (
    <section className="row row-cols-md-3 justify-content-center p-5 m-auto">
      {trainers.map((trainer) => (
        <TrainerCard trainer={trainer}></TrainerCard>
      ))}
    </section>
  );
};

export default Trainers;
