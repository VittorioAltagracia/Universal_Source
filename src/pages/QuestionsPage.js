import { Row } from "reactstrap";
import QuestionsList from "../questions/QuestionsList";
const QuestionsPage = () => {
  return (
    <div>
      <Row>
        <QuestionsList />
      </Row>
    </div>
  );
};

export default QuestionsPage;
