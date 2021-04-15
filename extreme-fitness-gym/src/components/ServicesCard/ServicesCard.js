import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCardInfo from "../ServicesCardInfo/ServicesCardInfo";
export default function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section className="row row-cols-md-3 justify-content-center p-5 m-auto">
      {services.map((service) => (
        <ServicesCardInfo service={service}></ServicesCardInfo>
      ))}
    </section>
  );
}
