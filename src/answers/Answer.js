import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Answer = ({ answer }) => {
  const { id, name, description } = answer;

  return (
    <div>
      <Card className="my-5">
        <CardTitle> {name}</CardTitle>
        <CardBody>
          <CardText> {description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Answer;
