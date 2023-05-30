import Main from "./components/Main.js";
import NavigationBar from "./components/Navbar.js";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import FooterComponent from "./components/Footer.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import AnswersPage from "./pages/AnswersPage.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAnswers } from "./answers/answersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnswers());
  }, [dispatch]);

  return (
    <div className="App">
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
