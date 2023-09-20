import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { AboutCreator } from "../utils/translations/hardCodedUITranslations";
const AboutPage = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <Container fluid className="mt-5 mx-2">
        <Row className="align-items-center justify-content-center text-center">
          <Col sm="10" md="9" lg="10" xl="auto" className="app-info-2 p-3 mt-5">
            <h2 className="dark-blue">
              {AboutCreator.mainHeader[i18n.language]}
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col sm="10" md="9" lg="10" xl="9" className="app-info-1 p-3 mb-5">
            <p>{AboutCreator.$1stPart[i18n.language]}</p>
            <h4 className="mt-5 dark-blue app-info-2 pt-3">
              {AboutCreator.subHeader[i18n.language]}
            </h4>
            <p>{AboutCreator.$2ndPart[i18n.language]}</p>
            <p>{AboutCreator.$3rdPart[i18n.language]}</p>
            <p>{AboutCreator.$4thPart[i18n.language]}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
