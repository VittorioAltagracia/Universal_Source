import { Card, CardBody, CardTitle } from "reactstrap";

const Answer = ({ answer }) => {
  const { id, name, description } = answer;

  return (
    <div>
      <Card>
        <CardTitle>Name: {name}</CardTitle>
        <CardBody>Answer: {description}</CardBody>
      </Card>
    </div>
  );
};

export default Answer;
