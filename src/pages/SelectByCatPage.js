import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllQuestions } from "../questions/questionsSlice";
import { Col, Row, Card, CardBody, CardTitle, CardFooter } from "reactstrap";
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

  //  This function will render a category that corresponds to data user is viewing
  const displaySelectedCat = (categoryName) => {
    return <CardFooter>Selected category: {categoryName}</CardFooter>;
  };

  const QuestionAnswerCard = (category) => {
    return (
      <Row key={category.id}>
        <Col key={category.id} md="6">
          <Card className="my-5">
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
            {displaySelectedCat(categoryName)}
          </Card>
        </Col>
      </Row>
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
