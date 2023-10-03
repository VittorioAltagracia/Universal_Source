import { Spinner, Col } from "reactstrap";

const LoadingSpinner = () => {
  return (
    <Col className="text-center">
      <Spinner
        className="m-4"
        style={{
          height: "2.5rem",
          width: "2.5rem",
          backgroundColor: "#021740",
        }}
        type="grow"
      ></Spinner>
    </Col>
  );
};

export default LoadingSpinner;
