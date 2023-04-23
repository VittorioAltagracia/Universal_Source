import LandingPage from "../subComponents/LandingPage";
import { Container, Row, Col } from "reactstrap";

const Main = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="main mt-4">
              <LandingPage />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
