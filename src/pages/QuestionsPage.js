import { Row, Container } from "reactstrap";
import QuestionsList from "../questions/QuestionsList";
import { Category } from "../utils/category";
import { useEffect } from "react";

const QuestionsPage = ({ selected }) => {
  useEffect(() => {
    document.body.classList.add("overlay-active");

    return () => {
      document.body.classList.remove("overlay-active");
    };
  }, []);
  return (
    <Container>
      <Row className="questions-overlay">
        <QuestionsList Category={Category} selected={selected} />
      </Row>
    </Container>
  );
};

export default QuestionsPage;
