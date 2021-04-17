import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddCourse = () => {
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
    const courseData = {
      name: data.name,
      price: data.price,
      img: imgURL,
    };
    const url = "http://localhost:5000/addService";
    console.log(courseData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Course Added!");
          history.push("/manageCourses");
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
          <p className="text-info"> Course Name </p>
          <input name="name" defaultValue="" ref={register} />
        </div>
        <div className="form-group">
          <p className="text-info"> Add Price </p>
          <input name="price" ref={register({ required: true })} />
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

export default AddCourse;
