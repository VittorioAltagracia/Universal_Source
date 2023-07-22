import { Toast, ToastHeader, ToastBody, Col, Row } from "reactstrap";

const ErrorToast = ({ errorMes }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Toast
            className="p-2 my-3"
            style={{ backgroundColor: "#ff711f", opacity: "0.9" }}
          >
            <ToastHeader>Error</ToastHeader>
            <ToastBody>{errorMes}</ToastBody>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default ErrorToast;
