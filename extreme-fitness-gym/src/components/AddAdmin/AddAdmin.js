import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddAdmin = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
    };
    const url = "https://intense-river-14020.herokuapp.com/addAdmin";
    console.log(adminData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Admin Added!");
          history.push("/admin");
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
          <p className="text-info"> Add New Admin Email </p>
          <input name="email" defaultValue="" ref={register} />
        </div>
        <input
          className="btn btn-info text-white"
          type="submit"
          value="Add Admin"
        />
      </form>
    </div>
  );
};

export default AddAdmin;
