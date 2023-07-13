import NavigationBar from "./components/Navbar.js";
import "./App.css";
import "./CardStyle.css";
import { Container, Row, Col } from "reactstrap";
import { Parallax, Background } from "react-parallax";
import FooterComponent from "./components/Footer.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import AnswersPage from "./pages/AnswersPage.js";
import QuestionsPage from "./pages/QuestionsPage.js";
import SelectByCatPage from "./pages/SelectByCatPage.js";
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
      <Parallax
        style={{
          backgroundImage: `url("/background.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        strength={500}
      >
        <Container fluid style={{ height: 1650 }}>
          <Background>
            <div>
              <Row>
                <Col>
                  <NavigationBar />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="answers" element={<AnswersPage />} />
                    <Route path="questions" element={<QuestionsPage />} />
                    <Route
                      path="dynamic/:categoryName"
                      element={<SelectByCatPage />}
                    />
                  </Routes>
                </Col>
              </Row>
            </div>
          </Background>
          <Row>
            <Background>
              <div>
                <FooterComponent />
              </div>
            </Background>
          </Row>
        </Container>
      </Parallax>
    </div>
  );
}

export default App;
