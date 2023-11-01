import NavigationBar from "./components/Navbar.js";
import "../src/cssStyling/App.css";
import "../src/cssStyling/CardStyle.css";
import "../src/cssStyling/Notes.css";
import { Container, Row } from "reactstrap";
import FooterComponent from "./components/Footer.js";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import QuestionsPage from "./pages/QuestionsPage.js";
import SelectByCatPage from "./pages/SelectByCatPage.js";
import RequestsPage from "./pages/RequestsPage.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { switchLanguage } from "../src/utils/translations/translationSlice.js";
import { useTranslation } from "react-i18next";
import ReleaseNotesPage from "./pages/ReleaseNotesPage.js";
import EnhancementsPage from "./pages/EnhancementsPage.js";

function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  // Setting the default language at the beginning

  useEffect(() => {
    dispatch(switchLanguage("en"));
    i18n.changeLanguage("en");
  }, [dispatch, i18n]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="App">
      <Container fluid>
        <div>
          <Row>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="questions" element={<QuestionsPage />} />
              <Route
                path="dynamic/:categoryName/:categoryId"
                element={<SelectByCatPage />}
              />
              <Route path="requests" element={<RequestsPage />} />
              <Route path="enhancements" element={<EnhancementsPage />} />
              <Route path="release_notes" element={<ReleaseNotesPage />} />
            </Routes>
          </Row>
        </div>
        <Row>
          <FooterComponent />
        </Row>
      </Container>
    </div>
  );
}

export default App;
