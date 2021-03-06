import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  return (
    <div className="col-md-4 mb-5">
      <div class="card text-center shadow bg-white g-3 p-3 m-2 rounded border-0">
        <div className="row">
          <div className="col-md-4 p-2">
            <img
              class="rounded-circle"
              src={review.img}
              style={{ height: "100px" }}
              alt=""
            />
          </div>
          <div className="col-md-8 text-left p-2">
            <h3>{review.customerName}</h3>
            <p>{review.designation}</p>
            <ReactStars
              count={5}
              isHalf={true}
              size={24}
              edit={false}
              value={review.rating}
              activeColor="#17a2b8"
            />
          </div>
          <p className="text-left">
            "<i>{review.review}</i>"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
