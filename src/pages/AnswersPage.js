import AnswersList from "../answers/AnswersList";
import { Container, Row, Col } from "reactstrap";

const AnswersPage = () => {
  return (
    <div>
      <Row>
        <Col onClick={() => <AnswersList />}></Col>
      </Row>
      <Row>
        <Col>QA</Col>
      </Row>
    </div>
  );
};

export default AnswersPage;
