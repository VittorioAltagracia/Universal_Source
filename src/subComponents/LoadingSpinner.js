import { Spinner, Col } from "reactstrap";

const LoadingSpinner = () => {
  return (
    <Col>
      <Spinner
        color="primary"
        className="m-4"
        style={{ height: "2.5rem", width: "2.5rem" }}
        type="grow"
      ></Spinner>
    </Col>
  );
};

export default LoadingSpinner;
