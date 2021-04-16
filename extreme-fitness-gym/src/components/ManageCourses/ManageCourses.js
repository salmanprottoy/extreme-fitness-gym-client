import React from "react";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import CourseElement from "../CourseElement/CourseElement";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return (
    <div className="container mt-3">
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
