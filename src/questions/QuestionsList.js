import React from "react";
import { Col, Row } from "reactstrap";
import Question from "./Question";
import { useSelector } from "react-redux";
import { selectAllQuestions } from "./questionsSlice";

const QuestionsList = () => {
  const questions = useSelector(selectAllQuestions);
  console.log(questions + ": retrieved data from BE");
  return (
    <>
      <Row>
        {questions.map((question) => (
          <Col md="6" key={question.id}>
            <Question question={question} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default QuestionsList;
