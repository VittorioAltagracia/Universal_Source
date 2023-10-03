import { Toast, ToastHeader, ToastBody, Col, Row, Button } from "reactstrap";
import { useState } from "react";
const ErrorToast = ({ errorMes }) => {
  const [dismissed, setDismissed] = useState(true);

  return (
    <div className="d-flex justify-content-center align-items-center mb-5">
      <Row>
        <Col>
          <Toast
            className="p-2 my-3"
            style={{
              backgroundColor: "orange",
              opacity: "0.9",
              fontSize: "medium",
            }}
            isOpen={dismissed}
          >
            <ToastHeader>Error ❌</ToastHeader>
            <ToastBody>{errorMes}</ToastBody>
            <Button
              style={{
                backgroundColor: "orangered",
                paddingTop: "0.3rem",
                paddingBottom: "0.2rem",
                paddingLeft: "0.7rem",
                paddingRight: "0.7rem",
              }}
              onClick={() => setDismissed(false)}
            >
              X
            </Button>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default ErrorToast;
