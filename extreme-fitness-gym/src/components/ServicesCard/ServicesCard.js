import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCardInfo from "../ServicesCardInfo/ServicesCardInfo";
import * as ReactBootstrap from "react-bootstrap";

export default function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://intense-river-14020.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="mt-5">
      {loading ? (
        <br />
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="info" />
      )}
      <section className="row row-cols-md-3 justify-content-center p-1 m-auto">
        {services.map((service) => (
          <ServicesCardInfo service={service}></ServicesCardInfo>
        ))}
      </section>
    </div>
  );
}
