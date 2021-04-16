import React from "react";
import { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { UserContext } from "../../App";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <h1>Welcome, {loggerInUser.name}</h1>
      <div className="container mb-5 mt-3">
        <Card style={{ width: "18rem" }}>
          <Card.Header>Your Courses </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
