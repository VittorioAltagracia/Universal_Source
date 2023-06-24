import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Question from "../questions/Question";
import { selectAllQuestions } from "../questions/questionsSlice";
import { Col, Card, CardBody, CardTitle } from "reactstrap";

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

  switch (categoryName) {
    case "Education":
      return RenderByCat("Education").map(
        (category) => (
          (
            <Col key={category}>
              <Card>
                <CardTitle>{category.name}</CardTitle>
                <CardBody> {category.answer}</CardBody>
              </Card>
            </Col>
          ),
          displaySelectedCat(categoryName)
        )
      );
    case "Documents":
      return RenderByCat(categoryName).map((category) => (
        <Col key={category}>
          <Card>
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
          </Card>
        </Col>
      ));
    case "Driving":
      return RenderByCat(categoryName).map((category) => (
        <Col key={category}>
          <Card>
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
          </Card>
        </Col>
      ));
    case "Jobs":
      return RenderByCat(categoryName).map((category) => (
        <Col key={category}>
          <Card>
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
          </Card>
        </Col>
      ));
    case "Language":
      return RenderByCat(categoryName).map((category) => (
        <Col key={category}>
          <Card>
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
          </Card>
        </Col>
      ));
    case "Housing":
      return RenderByCat(categoryName).map((category) => (
        <Col key={category}>
          <Card>
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
          </Card>
        </Col>
      ));
    case "Immigration":
      return RenderByCat(categoryName).map((category) => (
        <Col key={category}>
          <Card>
            <CardTitle>{category.name}</CardTitle>
            <CardBody> {category.answer}</CardBody>
          </Card>
        </Col>
      ));

    default:
      return <span>Category wasn't selected or there was an error</span>;
  }
};

export default DynamicPage;
