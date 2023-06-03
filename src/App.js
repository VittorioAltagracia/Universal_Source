import NavigationBar from "./components/Navbar.js";
import "./App.css";
import "./CardStyle.css";
import { Container, Row, Col } from "reactstrap";
import FooterComponent from "./components/Footer.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import AnswersPage from "./pages/AnswersPage.js";
import QuestionsPage from "./pages/QuestionsPage.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAnswers } from "./answers/answersSlice";
import { getQuestions } from "./questions/questionsSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswers());
    dispatch(getQuestions());
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
              <Route path="questions" element={<QuestionsPage />} />
            </Routes>
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
