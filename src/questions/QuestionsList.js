import React from "react";
import { Col, Row } from "reactstrap";
import Question from "./Question";
import { useSelector } from "react-redux";
import { selectAllQuestions } from "./questionsSlice";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import ErrorToast from "../subComponents/ErrorToast";

const QuestionsList = () => {
  const questions = useSelector(selectAllQuestions);
  const isLoading = useSelector((state) => state.questions.isLoading);
  const errorMes = useSelector((state) => state.questions.errorMes);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMes) {
    return <ErrorToast errorMes={errorMes} />;
  }

  return (
    <>
      <Row className="mx-0 mt-5 justify-content-center align-items-center">
        {questions.map((question) => (
          <Col md="8" xs="12" className="p-0" key={question.id}>
            <Question question={question} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default QuestionsList;
