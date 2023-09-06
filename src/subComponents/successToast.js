import { Toast, ToastHeader, ToastBody, Col, Row, Button } from "reactstrap";
import { useState } from "react";

const SuccessToast = ({ successMes }) => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Toast
            className="p-2 my-3"
            style={{ backgroundColor: "#ff711f", opacity: "0.9" }}
          >
            <ToastHeader>Success</ToastHeader>
            <ToastBody>{successMes}</ToastBody>
            <Button onClick={() => setDismissed(true)}>X Dismiss</Button>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default SuccessToast;
