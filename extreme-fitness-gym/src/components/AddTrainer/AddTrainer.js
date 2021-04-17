import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddTrainer = () => {
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
    const trainerData = {
      name: data.name,
      designation: data.designation,
      rating: data.rating,
      quotes: data.quotes,
      img: imgURL,
    };
    const url = "http://localhost:5000/addTrainer";
    console.log(trainerData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(trainerData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Trainer Added!");
          history.push("/manageTrainers");
        }
      });
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-info p-3 m-2 rounded"
      >
        <div className="form-group">
          <p className="text-info"> Trainer Name </p>
          <input name="name" defaultValue="" ref={register} />
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
          <p className="text-info"> Quotes </p>
          <input name="quotes" ref={register({ required: true })} />
        </div>
        <div className="form-group">
          <p className="text-info">Add Photo </p>
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
          value="Add Trainer"
        />
      </form>
    </div>
  );
};

export default AddTrainer;
