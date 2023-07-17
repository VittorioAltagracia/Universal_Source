import { Row } from "reactstrap";
import QuestionsList from "../questions/QuestionsList";
import { Category } from "../utils/category";

const QuestionsPage = ({ selected }) => {
  return (
    <div>
      <Row>
        <QuestionsList Category={Category} selected={selected} />
      </Row>
    </div>
  );
};

export default QuestionsPage;
