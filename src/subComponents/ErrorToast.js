import { Toast, ToastHeader, ToastBody, Col, Row } from "reactstrap";

const ErrorToast = ({ errorMes }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Toast className="p-2 bg-info my-3">
            <ToastHeader>Error</ToastHeader>
            <ToastBody>{errorMes}</ToastBody>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default ErrorToast;
