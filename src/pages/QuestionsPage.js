import { Row, Container } from "reactstrap";
import QuestionsList from "../questions/QuestionsList";
import { Category } from "../utils/category";

const QuestionsPage = ({ selected }) => {
  return (
    <Container>
      <Row className="questions-overlay">
        <QuestionsList Category={Category} selected={selected} />
      </Row>
    </Container>
  );
};

export default QuestionsPage;
