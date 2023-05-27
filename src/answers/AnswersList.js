import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Answer from "./Answer";
import { useSelector } from "react-redux";
import { selectAllAnswers } from "./answersSlice";

const AnswersList = () => {
  const answers = useSelector(selectAllAnswers);
  console.log(answers);
  return (
    <>
      <Row>
        {answers.map((answer) => (
          <Col md="6" key={answer.id}>
            <Answer answer={answer} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AnswersList;
