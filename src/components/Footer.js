import { Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";

const FooterComponent = () => {
  return (
    <footer className="main-footer mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Toast
              className="p-2 my-3"
              style={{ backgroundColor: "#ff711f", opacity: "0.9" }}
            >
              <ToastHeader className="justify-content-center">
                Please note
              </ToastHeader>
              <ToastBody>
                This application is still in development and may contain fake
                data and is not 100% responsive to all screensizes. New updates
                and improvemets are being added regularly.
              </ToastBody>
            </Toast>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default FooterComponent;
