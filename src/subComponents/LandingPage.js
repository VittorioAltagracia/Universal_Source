import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { AboutTheApp } from "../utils/translations/hardCodedUITranslations";
const LandingPage = () => {
  const { i18n } = useTranslation();

  return (
    <Container fluid className="mt-5">
      <Row className="align-items-start">
        <Col md="4" className="app-info py-3">
          <h2 style={{ color: "#000" }}>{AboutTheApp.header[i18n.language]}</h2>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="app-info">
          <div>
            <Container>
              <Row className="my-3">
                <Col md="auto">
                  <p>{AboutTheApp.$1stPart[i18n.language]}</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
