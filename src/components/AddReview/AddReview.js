import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

const AddReview = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const [imgURL, setImgURL] = useState(null);

  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "75fc47c76e48fe35cc2f339599503525");
    imgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const reviewData = {
      customerName: data.customerName,
      designation: data.designation,
      review: data.review,
      rating: data.rating,
      img: imgURL,
    };
    const url = "https://intense-river-14020.herokuapp.com/addReview";
    console.log(reviewData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Review Added!");
          history.push("/home");
        }
      });
  };
  return (
    <div>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-info p-3 m-2 rounded"
        >
          <div className="form-group">
            <p className="text-info"> Trainer Name </p>
            <input
              name="customerName"
              defaultValue={loggerInUser.name}
              ref={register}
            />
          </div>
          <div className="form-group">
            <p className="text-info"> Designation </p>
            <input name="designation" ref={register({ required: true })} />
          </div>
          <div className="form-group">
            <p className="text-info"> Add Rating (0-5) </p>
            <input name="rating" ref={register({ required: true })} />
          </div>
          <div className="form-group">
            <p className="text-info"> Review </p>
            <input name="review" ref={register({ required: true })} />
          </div>
          <div className="form-group">
            <p className="text-info"> User Photo </p>
            <input
              className=""
              name="trainerPhoto"
              type="file"
              onChange={handleImgUpload}
            />
          </div>
          <input
            className="btn btn-info text-white"
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
