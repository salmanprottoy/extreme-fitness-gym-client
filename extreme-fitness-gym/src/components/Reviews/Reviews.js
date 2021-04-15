import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="row row-cols-md-3 justify-content-center p-5 m-auto">
      {reviews.map((review) => (
        <ReviewCard review={review}></ReviewCard>
      ))}
    </section>
  );
};

export default Reviews;
