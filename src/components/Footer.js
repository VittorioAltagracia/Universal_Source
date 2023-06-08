import { Container, Row, Col } from "reactstrap";

const FooterComponent = () => {
  return (
    <footer className="main-footer mt-5">
      <Container fluid>
        <Row>
          <Col md="3">
            <p>Footer</p>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
