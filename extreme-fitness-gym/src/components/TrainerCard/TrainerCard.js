import React from "react";
import ReactStars from "react-rating-stars-component";

const TrainerCard = ({ trainer }) => {
  return (
    <div className="col-md-6 mb-5">
      <div class="card text-center h-100 shadow bg-white g-3 p-3 m-2 rounded border-0">
        <div className="row">
          <div className="col-md-7 p-2">
            <img
              class="img-fluid rounded"
              src={trainer.img}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="col-md-5 text-left p-2">
            <h3>{trainer.name}</h3>
            <p>{trainer.designation}</p>
            <ReactStars
              count={5}
              isHalf={true}
              size={24}
              edit={false}
              value={trainer.rating}
              activeColor="#17a2b8"
            />
            <p>
              <i> "{trainer.quotes}"</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
