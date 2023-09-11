import { Toast, ToastHeader, ToastBody, Col, Row, Button } from "reactstrap";
import { useState } from "react";

const SuccessToast = ({ successMes }) => {
  const [dismissed, setDismissed] = useState(true);

  return (
    <div className="d-flex justify-content-center align-items-center mb-5">
      <Row>
        <Col>
          <Toast
            isOpen={dismissed}
            className="p-2 my-3"
            style={{
              backgroundColor: "#4263eb",
              opacity: "0.9",
              color: "#fff",
            }}
          >
            <ToastHeader>Success ✅</ToastHeader>
            <ToastBody>{successMes}</ToastBody>
            <Button color="primary" onClick={() => setDismissed(false)}>
              X
            </Button>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default SuccessToast;
