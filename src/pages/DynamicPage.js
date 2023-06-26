import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllQuestions } from "../questions/questionsSlice";
import { Col, Row, Card, CardBody, CardTitle, CardFooter } from "reactstrap";

const DynamicPage = () => {
  const { categoryName } = useParams();
  const questions = useSelector(selectAllQuestions);

  const RenderByCat = (category) => {
    const filterByCategory = questions.filter(
      (question) => question.category === category
    );
    return filterByCategory;
  };

  const displaySelectedCat = (categoryName) => {
    return <Col>Selected category: {categoryName}</Col>;
  };

  const QuestionAnswerCard = (category) => {
    return (
      <Row>
        <Col key={category} md="6">
          <Card className="my-5">
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
            <CardFooter>{displaySelectedCat(categoryName)}</CardFooter>
          </Card>
        </Col>
      </Row>
    );
  };

  switch (categoryName) {
    case "Education":
      return RenderByCat("Education").map((category) =>
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

    default:
      return <span>Category wasn't selected or there was an error</span>;
  }
};

export default DynamicPage;
