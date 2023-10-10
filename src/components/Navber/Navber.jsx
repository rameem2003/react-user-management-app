import React, { useContext, useState } from "react";
import useUserContext from "../../Hooks/useUserContext";

import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import ToggleContext from "../../context/ToggleContext";
import useToggleContext from "../../Hooks/useToggleContext";

const Navber = () => {
  const { setUserData } = useUserContext();
  // const [show, setShow] = useState(false);

  const { show, setShow } = useToggleContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState(0);
  const [userImg, setUserImg] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    let newUser = { name: userName, id: userID, img: userImg };

    setUserData((olduser) => {
      return [...olduser, newUser];
    });

    setUserName("");
    setUserID("");
    setUserImg(null);
    setShow(false);
  };

  return (
    <>
      {/* navber */}
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="#" className="text-light fw-bold">
            Simple User Management App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Button variant="danger" onClick={handleShow}>
                Add User +
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navber end */}

      {/* modals */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Full Name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User ID"
                value={userID}
                onChange={(e) => {
                  setUserID(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Upload Photo</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter User ID"
                onChange={(e) => {
                  setUserImg(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="d-block ms-auto">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* modals end */}
    </>
  );
};

export default Navber;
