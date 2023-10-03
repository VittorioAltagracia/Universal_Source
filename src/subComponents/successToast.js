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
            className="p-2 mt-5"
            style={{
              backgroundColor: "#021740",
              opacity: "0.9",
              color: "#fff",
              fontSize: "medium",
            }}
          >
            <ToastHeader style={{ color: "#021740" }}>Success ☑</ToastHeader>
            <ToastBody>{successMes}</ToastBody>
            <Button
              style={{
                backgroundColor: "#768fab",
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

export default SuccessToast;
