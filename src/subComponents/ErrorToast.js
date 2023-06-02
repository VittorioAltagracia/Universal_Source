import { Toast, ToastHeader, ToastBody, Col } from "reactstrap";

const ErrorToast = ({ errorMes }) => {
  return (
    <Col>
      <Toast className="p-2 bg-info my-3">
        <ToastHeader>Error</ToastHeader>
        <ToastBody>{errorMes}</ToastBody>
      </Toast>
    </Col>
  );
};

export default ErrorToast;
