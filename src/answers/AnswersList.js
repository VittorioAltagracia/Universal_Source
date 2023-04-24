import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Answer from "./Answer";
import { useSelector } from "react-redux";
import { selectAllAnswers } from "./answersSlice";

const AnswersList = ({ answer }) => {
  const answers = useSelector(selectAllAnswers);

  return (
    <>
      <Row>
        {answers.map((answer) => (
          <Col key={answer.id}>
            {" "}
            <Answer answer={answer} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AnswersList;
