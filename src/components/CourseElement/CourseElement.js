import React from "react";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const CourseElement = ({ course }) => {
  const history = useHistory();
  const deleteCourse = (id) => {
    console.log(id);
    fetch(`https://intense-river-14020.herokuapp.com/services/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Course Deleted!");
          history.push("/home");
        }
      });
  };
  return (
    <tr>
      <td>{course.name}</td>
      <td>
        <img src={course.img} alt="" style={{ height: "100px" }} />
      </td>
      <td>${course.price}</td>
      <td>
        <button className="btn btn-success m-1">
          <FontAwesomeIcon className="m-auto" icon={faEdit} />
        </button>
        <button
          onClick={() => deleteCourse(course._id)}
          className="btn btn-danger m-1"
        >
          <FontAwesomeIcon className="m-auto" icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default CourseElement;
