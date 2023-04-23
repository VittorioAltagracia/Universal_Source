import { fetchTestAnswer } from "./fetchAnswers";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const Answer = ({ answer }) => {
  const { id, name, answers } = answer;

  return (
    <div>
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardBody>{answers}</CardBody>
      </Card>
    </div>
  );
};

export default Answer;
