import React from "react";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import CourseElement from "../CourseElement/CourseElement";
import * as ReactBootstrap from "react-bootstrap";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://intense-river-14020.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="container mt-3">
      {loading ? (
        <br />
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="info" />
      )}
      <Table striped bordered hover className="mt-1">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Service Photo</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <CourseElement course={course}></CourseElement>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageCourses;
