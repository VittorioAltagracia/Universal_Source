import AnswersList from "../answers/AnswersList";
import { Row, Col } from "reactstrap";

const AnswersPage = () => {
  return (
    <div>
      <Row>
        <Col>
          <AnswersList />
        </Col>
      </Row>
    </div>
  );
};

export default AnswersPage;
