import React from "react";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const TrainerElement = ({ trainer }) => {
  const history = useHistory();
  const deleteTrainer = (id) => {
    console.log(id);
    fetch(`https://intense-river-14020.herokuapp.com/trainers/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Trainer Deleted!");
          history.push("/home");
        }
      });
  };
  return (
    <tr>
      <td>{trainer.name}</td>
      <td>
        <img src={trainer.img} alt="" style={{ height: "100px" }} />
      </td>
      <td>{trainer.designation}</td>
      <td>{trainer.rating}</td>
      <td>{trainer.quotes}</td>
      <td>
        <button className="btn btn-success m-1">
          <FontAwesomeIcon className="m-auto" icon={faEdit} />
        </button>
        <button
          onClick={() => deleteTrainer(trainer._id)}
          className="btn btn-danger m-1"
        >
          <FontAwesomeIcon className="m-auto" icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default TrainerElement;
