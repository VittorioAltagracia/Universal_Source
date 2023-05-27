import { Card, CardBody, CardTitle } from "reactstrap";

const Answer = () => {
  const { id, name, answer } = answer;

  return (
    <div>
      <Card>
        <CardTitle>Name: {name}</CardTitle>
        <CardBody>Answer: {answer}</CardBody>
      </Card>
    </div>
  );
};

export default Answer;
