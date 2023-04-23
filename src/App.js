import logo from "./logo.svg";
import Main from "./components/Main.js";
import NavigationBar from "./components/Navbar.js";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import FooterComponent from "./components/Footer.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import AnswersPage from "./pages/AnswersPage.js";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Container fluid>
        <Row>
          <Col>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="answers" element={<AnswersPage />} />
            </Routes>
            <Main />
          </Col>
        </Row>
        <Row>
          <FooterComponent />
        </Row>
      </Container>
    </div>
  );
}

export default App;
