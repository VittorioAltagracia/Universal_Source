import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Question from "../questions/Question";
import { selectAllQuestions } from "../questions/questionsSlice";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const DynamicPage = () => {
  const { categoryName } = useParams();
  const questions = useSelector(selectAllQuestions);

  const RenderByCat = (category) => {
    const filterByCategory = questions.filter(
      (question) => question.category === category
    );
    return filterByCategory;
  };

  if (categoryName === "Housing") {
    return RenderByCat(categoryName).map((category) => (
      <Col key={category}>
        <Card>
          <CardTitle>{category.name}</CardTitle>
          <CardBody> {category.answer}</CardBody>
        </Card>
      </Col>
    ));
  } else
    <div>
      <Container>
        <Row>
          <Col>Selected category: {categoryName}</Col>
        </Row>
      </Container>
    </div>;

  return <span>Category wasn't selected or there was an error</span>;
};

export default DynamicPage;
