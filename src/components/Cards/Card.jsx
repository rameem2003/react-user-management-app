import React from "react";
import { Button, Card } from "react-bootstrap";

import useUserContext from "../../Hooks/useUserContext";

const UserCard = ({ user, id }) => {
  const { userData, setUserData } = useUserContext();

  const deleteUserData = (id) => {
    const filtered = userData.filter((u, i) => i !== id);
    setUserData(filtered);
  };

  return (
    <Card style={{ width: "18rem" }} className="m-3 p-0">
      <Card.Img variant="top" src={user.img} height="357px" width="268px" />
      <Card.Body>
        <Card.Title className="text-center">{user.name}</Card.Title>
        <Card.Text className="text-center fw-bold text-danger">
          ID {user.id}
        </Card.Text>
        <Button
          variant="danger"
          className="d-block mx-auto"
          onClick={() => {
            deleteUserData(id);
          }}
        >
          Delete User
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
