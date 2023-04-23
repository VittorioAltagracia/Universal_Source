import { fetchTestAnswer } from "./fetchAnswers";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Answer from "./Answer";
import { useSelector } from "react-redux";

const AnswersList = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const answers = useSelector(fetchTestAnswer);

  return (
    <>
      {/* <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Testing it</ModalHeader>
        <ModalBody props></ModalBody>
      </Modal> */}

      {answers.map((answer) => (
        <Col key={answer.id}>
          {" "}
          <Answer answer={answer} />
        </Col>
      ))}
    </>
  );
};

export default AnswersList;
