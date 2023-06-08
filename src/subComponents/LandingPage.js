import { Container, Row, Col } from "reactstrap";

const LandingPage = () => {
  return (
    <Container fluid className="mt-0">
      <Row className="align-items-start">
        <Col md="3">
          <h2>
            New in this country? Find quick answers to the most important
            questions.
          </h2>
          <p className="mt-4"></p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
