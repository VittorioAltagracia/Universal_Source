import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { AboutCreator } from "../utils/translations/hardCodedUITranslations";
const AboutPage = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <Container fluid className="mt-5 mx-2">
        <Row className="align-items-center justify-content-center">
          <Col sm="10" md="6" lg="6" xl="5" className="app-info-2 p-3">
            <h2>{AboutCreator.mainHeader[i18n.language]}</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="10" md="6" lg="6" xl="5" className="app-info-1 py-4 ">
            <p>{AboutCreator.$1stPart[i18n.language]}</p>
            <h4>{AboutCreator.subHeader[i18n.language]}</h4>
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
