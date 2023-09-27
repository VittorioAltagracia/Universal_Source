import { Container, Row, Col } from "reactstrap";

import { useTranslation } from "react-i18next";
import {
  AboutTheApp,
  MultiLingualSupport,
  SimplicityOfUse,
} from "../utils/translations/hardCodedUITranslations";
import LoadingSpinner from "../subComponents/LoadingSpinner";

const LandingPage = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Container fluid>
        <Row>
          {/* Column for text */}
          <Col md="8" lg="auto" xl="9">
            <Row className="align-items-center justify-content-start ">
              <Col className="app-info-2 p-0" xs="auto" xl="9">
                <h3
                  className="new-us"
                  style={{ marginBottom: "1px", marginTop: "5.5rem" }}
                >
                  {AboutTheApp.header1[i18n.language]}
                </h3>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-start">
              <Col className="app-info-2 p-0">
                <h3 className="dont-stress" style={{ marginBottom: "4rem" }}>
                  {AboutTheApp.header2[i18n.language]}
                </h3>
              </Col>
            </Row>
          </Col>

          {/* extends across entire view port */}
          <Col xs="auto">
            <Row className="align-items-center justify-content-start">
              <Col className="app-info-2 p-0">
                <h3 className="large-font-quick-answers">
                  {AboutTheApp.header3[i18n.language]}
                </h3>
              </Col>
            </Row>
          </Col>

          {/* second part that takes 8 */}
          <Col xs="auto" md="8" lg="8" xl="8">
            <Row className="pb-5 justify-content-start">
              <Col className="app-info-1 p-0">
                <p>{AboutTheApp.$1stPart[i18n.language]}</p>
              </Col>
            </Row>
            <Row className="justify-content-start mt-5">
              <Col className="app-info-2 p-0">
                <h3>{SimplicityOfUse.header[i18n.language]}</h3>
              </Col>
            </Row>

            <Row className="justify-content-start">
              <Col className="app-info-1 p-0 mb-5">
                <p>{SimplicityOfUse.$1stPart[i18n.language]}</p>
              </Col>
            </Row>
            <Row className="justify-content-start mt-5">
              <Col className="app-info-2 p-0">
                <h3>{MultiLingualSupport.header[i18n.language]}</h3>
              </Col>
            </Row>
            <Row className="justify-content-start mb-5">
              <Col className="app-info-1 p-0">
                <p>{MultiLingualSupport.$1stPart[i18n.language]}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
