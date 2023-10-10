import React from "react";
import { Container } from "react-bootstrap";
import UserCard from "./Card";
import useUserContext from "../../Hooks/useUserContext";
import useToggleContext from "../../Hooks/useToggleContext";

const Cards = () => {
  const { userData } = useUserContext();
  const { setShow } = useToggleContext();

  const handleShow = () => setShow(true);

  const ShowAddButton = () => {
    return (
      <div
        className="addButton w-75 py-5 my-5 text-center"
        style={{ border: "2px dashed grey", cursor: "pointer" }}
        onClick={handleShow}
      >
        <span
          style={{
            fontSize: "90px",
            display: "inline-block",
            padding: 0,
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            border: "2px dashed grey",
          }}
        >
          +
        </span>
        <p className="mt-3">Add New User</p>
      </div>
    );
  };

  return (
    <Container>
      <div className="row d-flex align-items-center justify-content-center">
        {userData.length === 0 ? (
          <ShowAddButton />
        ) : (
          userData.map((user, i) => {
            return <UserCard user={user} id={i} key={i} />;
          })
        )}
      </div>
    </Container>
  );
};

export default Cards;
