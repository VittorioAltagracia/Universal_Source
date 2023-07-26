import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllQuestions } from "../questions/questionsSlice";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
} from "reactstrap";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import ErrorToast from "../subComponents/ErrorToast";

const SelectByCatPage = () => {
  const { categoryName } = useParams();
  const questions = useSelector(selectAllQuestions);
  const isLoading = useSelector((state) => state.questions.isLoading);
  const errorMes = useSelector((state) => state.questions.errorMes);

  // This function filters data from questions array
  // below I am passing in it an argument which is a category that user clicks on
  const RenderByCat = (category) => {
    const filterByCategory = questions.filter(
      (question) => question.category === category
    );
    return filterByCategory;
  };

  //  This function will render a category that corresponds to data user is viewing and a footer, below this function is called upon in QuestionAnswerCard function
  const displaySelectedCat = (categoryName) => {
    return (
      <CardFooter
        className="p-3"
        style={{ backgroundColor: "#7188e7", color: "#fff" }}
      >
        Selected category: {categoryName}
      </CardFooter>
    );
  };

  const QuestionAnswerCard = (category) => {
    return (
      <Container fluid key={category.id}>
        <Row
          key={category.id}
          className="justify-content-center align-items-center mt-4"
        >
          <Col key={category.id} md="6" xs="11">
            <Card className="my-5 main-categorized-card">
              <CardTitle className="categorized-card-title my-0 p-3">
                {category.name}
              </CardTitle>
              <CardBody className="categorized-card p-3">
                {category.answer}
              </CardBody>
              {category.required_documents ? (
                <CardFooter
                  className="p-3"
                  style={{ backgroundColor: "#7188e7", color: "#fff" }}
                >
                  Required Documents: {category.required_documents}
                </CardFooter>
              ) : null}
              {displaySelectedCat(categoryName)}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMes) {
    return <ErrorToast errorMes={errorMes} />;
  }

  switch (categoryName) {
    case "Education":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );
    case "Documents":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );
    case "Driving":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );
    case "Jobs":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );
    case "Language":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );
    case "Housing":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );
    case "Immigration":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );
    case "Finances":
      return RenderByCat(categoryName).map((category) =>
        QuestionAnswerCard(category)
      );

    default:
      return <span>Category wasn't selected or there was an error</span>;
  }
};

export default SelectByCatPage;
