import { Row } from "reactstrap";
import QuestionsList from "../questions/QuestionsList";
import { Category } from "../utils/category";
const QuestionsPage = () => {
  return (
    <div>
      <Row>
        <QuestionsList Category={Category} />
      </Row>
    </div>
  );
};

export default QuestionsPage;
