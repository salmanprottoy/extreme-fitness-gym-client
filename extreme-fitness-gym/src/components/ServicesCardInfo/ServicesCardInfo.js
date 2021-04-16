import React from "react";
import { Link } from "react-router-dom";

const ServicesCardInfo = ({ service }) => {
  console.log(service);
  return (
    <div className="col-md-4 mb-5">
      <div class="card text-center h-100 shadow bg-white g-3 p-4 m-2 rounded border-0">
        <img
          class="card-img p-4 rounded"
          src={service.img}
          style={{ width: "100%" }}
          alt=""
        />
        <div class="card-body text-left">
          <h3 class="card-title text-info-color">{service.name}</h3>
          <p></p>
          <div class="d-flex justify-content-between">
            <div class="text-left">
              <h3 className="text-info-color">${service.price}</h3>
            </div>
            <div class="text-right">
              <Link
                to={`/checkout/${service._id}`}
                className="text-decoration-none"
              >
                <button className="btn btn-secondary">Join Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardInfo;
