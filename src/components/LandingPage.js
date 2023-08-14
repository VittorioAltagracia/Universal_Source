import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { AboutTheApp } from "../utils/translations/hardCodedUITranslations";
const LandingPage = () => {
  const { i18n } = useTranslation();

  return (
    <Container fluid className="mt-5">
      <Row className="align-items-start">
        <Col md="4" className="app-info-2 py-3">
          <h3 style={{ color: "#000" }}>{AboutTheApp.header[i18n.language]}</h3>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col md="4" className="app-info-1">
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
        <Col md="4" className="app-info-2 py-3">
          <h3 style={{ color: "#000" }}>The Simplicity of Use</h3>
        </Col>
      </Row>
      <Row className="justify-content-end ">
        <Col md="4" className="app-info-1 py-3 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          facilisis magna etiam tempor orci eu lobortis. Eget mauris pharetra et
          ultrices neque ornare aenean euismod. Malesuada fames ac turpis
          egestas integer eget. Venenatis a condimentum vitae sapien
          pellentesque habitant morbi tristique. Sit amet commodo nulla facilisi
          nullam vehicula ipsum. Odio pellentesque diam volutpat commodo sed
          egestas. Nunc consequat interdum varius sit amet mattis. Enim ut
          tellus elementum sagittis vitae et. Placerat duis ultricies lacus sed.
          Mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt
          lobortis feugiat vivamus at augue eget arcu. Feugiat sed lectus
          vestibulum mattis ullamcorper velit. Purus ut faucibus pulvinar
          elementum integer. Metus aliquam eleifend mi in nulla. Sed odio morbi
          quis commodo odio aenean sed. Ipsum dolor sit amet consectetur
          adipiscing elit.{" "}
        </Col>
      </Row>
      <Row className="justify-content-start mt-5">
        <Col md="4" className="app-info-2 py-3">
          <h3 style={{ color: "#000" }}>Multi-Lingual Support</h3>
        </Col>
      </Row>
      <Row className="justify-content-start ">
        <Col md="4" className="app-info-1 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          facilisis magna etiam tempor orci eu lobortis. Eget mauris pharetra et
          ultrices neque ornare aenean euismod. Malesuada fames ac turpis
          egestas integer eget. Venenatis a condimentum vitae sapien
          pellentesque habitant morbi tristique. Sit amet commodo nulla facilisi
          nullam vehicula ipsum. Odio pellentesque diam volutpat commodo sed
          egestas. Nunc consequat interdum varius sit amet mattis. Enim ut
          tellus elementum sagittis vitae et. Placerat duis ultricies lacus sed.
          Mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt
          lobortis feugiat vivamus at augue eget arcu. Feugiat sed lectus
          vestibulum mattis ullamcorper velit. Purus ut faucibus pulvinar
          elementum integer. Metus aliquam eleifend mi in nulla. Sed odio morbi
          quis commodo odio aenean sed. Ipsum dolor sit amet consectetur
          adipiscing elit.{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
