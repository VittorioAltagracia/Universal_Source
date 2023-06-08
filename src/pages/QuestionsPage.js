import { Row } from "reactstrap";
import QuestionsList from "../questions/QuestionsList";
import { Category } from "../utils/category";
const QuestionsPage = () => {
  const { name } = Category;
  return (
    <div>
      <Row>
        <QuestionsList />
      </Row>
    </div>
  );
};

export default QuestionsPage;
