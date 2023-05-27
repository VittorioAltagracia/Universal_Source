import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const Answer = () => {
  const { id, name, answer } = answer;

  return (
    <div>
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardBody>{answer}</CardBody>
      </Card>
    </div>
  );
};

export default Answer;
