import React from "react";
import { Container } from "react-bootstrap";
import UserCard from "./Card";
import useUserContext from "../../Hooks/useUserContext";

const Cards = () => {
  const { userData } = useUserContext();

  return (
    <Container>
      <div className="row d-flex align-items-center justify-content-center">
        {userData.map((user, i) => {
          return <UserCard user={user} id={i} key={i} />;
        })}
      </div>
    </Container>
  );
};

export default Cards;
