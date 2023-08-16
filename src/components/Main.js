import LandingPage from "./LandingPage";
import { Container, Row, Col } from "reactstrap";

const Main = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <LandingPage />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
