import { Card, CardTitle } from "reactstrap";

const Question = ({ question }) => {
  const { id, name } = question;

  return (
    <div>
      <Card>
        <CardTitle>Name: {name}</CardTitle>
      </Card>
    </div>
  );
};

export default Question;
