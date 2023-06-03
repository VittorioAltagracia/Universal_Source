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
    return (
      <Row>
        <Col sm="4">
          <ErrorToast errorMes={errorMes} />
        </Col>
      </Row>
    );
  }

  function proof(cat) {
    const filterByCategory = questions.filter(
      (question) => question.category === cat
    );
    return filterByCategory;
  }

  return (
    <>
      <Row className="ms-auto">
        {questions.map((question) => (
          <Col md="3" className="m-5" key={question.id}>
            <Question question={question} />
          </Col>
        ))}
      </Row>
      {proof("Documents").map((category) => (
        <Col>{category.answer}</Col>
      ))}
    </>
  );
};

export default QuestionsList;
