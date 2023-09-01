import RequestForm from "./RequestForm";
import { Row, Col } from "reactstrap";
const Request = () => {
  return (
    <div>
      <Row>
        <h2>Request new answers or contact developer</h2>
      </Row>
      <Row className="mb-5">
        <Col>
          <p>
            Here you can send a request to the developer to include new post
            and/or category. For example: there is something you think would be
            helpfull for others to be on this website available in different
            languages. The form below will allow you to articulate your
            thouhgts. For example: you believe this app should have info on to
            apply for Unemployment.
          </p>
        </Col>
      </Row>

      <RequestForm />
    </div>
  );
};

export default Request;
