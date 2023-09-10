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
    <>
      <div className="imgRight">
        <Container fluid className="mt-5">
          <Row className="align-items-center justify-content-start">
            <Col md="6" lg="6" xl="4" className="app-info-2">
              <h3>{AboutTheApp.header[i18n.language]}</h3>
            </Col>
          </Row>
          <Row className="pb-5 justify-content-start">
            <Col md="6" lg="6" xl="4" className="app-info-1 p-0">
              <Container>
                <Row className="my-3">
                  <Col md="auto">
                    <p>{AboutTheApp.$1stPart[i18n.language]}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="justify-content-start mt-5">
            <Col md="6" lg="6" xl="4" className="app-info-2">
              <h3>{SimplicityOfUse.header[i18n.language]}</h3>
            </Col>
          </Row>
          <Row className="justify-content-start">
            <Col md="6" lg="6" xl="4" className="app-info-1  mb-5">
              <p>{SimplicityOfUse.$1stPart[i18n.language]}</p>
            </Col>
          </Row>
          <Row className="justify-content-start mt-5">
            <Col md="6" lg="6" xl="4" className="app-info-2">
              <h3>{MultiLingualSupport.header[i18n.language]}</h3>
            </Col>
          </Row>
          <Row className="justify-content-start ">
            <Col md="6" lg="6" xl="4" className="app-info-1">
              <p>{MultiLingualSupport.$1stPart[i18n.language]}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
