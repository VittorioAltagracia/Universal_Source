import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import {
  AboutTheApp,
  MultiLingualSupport,
  SimplicityOfUse,
} from "../utils/translations/hardCodedUITranslations";
const LandingPage = () => {
  const { i18n } = useTranslation();

  return (
    <Container fluid className="mt-5">
      <Row className="align-items-start">
        <Col md="6" lg="6" xl="4" className="app-info-2 py-3">
          <h3 style={{ color: "#000" }}>{AboutTheApp.header[i18n.language]}</h3>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col md="6" lg="6" xl="4" className="app-info-1">
          <Container>
            <Row className="my-3">
              <Col md="auto">
                <p>{AboutTheApp.$1stPart[i18n.language]}</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-end mt-5">
        <Col md="6" lg="6" xl="4" className="app-info-2 py-3">
          <h3 style={{ color: "#000" }}>
            {SimplicityOfUse.header[i18n.language]}
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-end ">
        <Col md="6" lg="6" xl="4" className="app-info-1 py-3 mb-5">
          <p>{SimplicityOfUse.$1stPart[i18n.language]}</p>
        </Col>
      </Row>
      <Row className="justify-content-start mt-5">
        <Col md="6" lg="6" xl="4" className="app-info-2 py-3">
          <h3 style={{ color: "#000" }}>
            {MultiLingualSupport.header[i18n.language]}
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-start ">
        <Col md="6" lg="6" xl="4" className="app-info-1 py-3">
          <p>{MultiLingualSupport.$1stPart[i18n.language]}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
