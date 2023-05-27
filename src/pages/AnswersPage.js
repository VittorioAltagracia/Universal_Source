import AnswersList from "../answers/AnswersList";
import { Row, Col, Button } from "reactstrap";

const AnswersPage = () => {
  return (
    <div>
      <Row>
        <Col>
          <Button>Click me</Button>
          <AnswersList />
        </Col>
        <Col>QA</Col>
      </Row>
    </div>
  );
};

export default AnswersPage;
