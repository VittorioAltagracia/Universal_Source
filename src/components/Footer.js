import { Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";
import { useTranslation } from "react-i18next";
import { WarningToast } from "../utils/translations/hardCodedUITranslations";
const FooterComponent = () => {
  const { i18n } = useTranslation();

  return (
    <footer className="main-footer my-5">
      <div className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Toast
              className="p-2 my-3"
              style={{ backgroundColor: "#ff711f", opacity: "0.9" }}
            >
              <ToastHeader className="justify-content-center">
                {WarningToast.header[i18n.language]}
              </ToastHeader>
              <ToastBody>{WarningToast.content[i18n.language]}</ToastBody>
            </Toast>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default FooterComponent;
