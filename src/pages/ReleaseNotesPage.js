import { Col, Row, Container } from "reactstrap";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase.config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import ErrorToast from "../subComponents/ErrorToast";
import { useTranslation } from "react-i18next";
import { TextForNavbar } from "../utils/translations/hardCodedUITranslations";

const ReleaseNotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { i18n } = useTranslation();

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    setIsLoading(true);
    const response = await getDocs(
      query(collection(db, "notes"), orderBy("version"))
    );

    // Checks if there is no data in the response
    if (response.empty) {
      setIsLoading(false);
      const errorMessage =
        "Unable to retrieve data or request resulted in error.";
      setErrorText(errorMessage);
      setIsError(true);
    }

    // if there is no error does the following
    const notesArr = [];
    response.forEach((doc) => {
      notesArr.push(doc.data());
    });
    setIsLoading(false);
    setNotes(notesArr);
  }

  return (
    <Container fluid className="add-margin-top">
      <Row className="align-items-center justify-content-center text-center">
        <Col sm="10" md="9" lg="10" xl="auto" className="app-info-2 p-3 mt-5">
          <h2 className="dark-blue">{TextForNavbar.navbar5[i18n.language]}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col sm="8" md="7" lg="6" xl="5" className="app-info-1 p-3 mb-5">
          {i18n.language === "en" ? (
            <>
              Here you can read about new features, improvements, and bug fixes
              for <strong>Universal Source</strong>. Said differently - here you
              can see the evolution of this project.{" "}
              <strong>Please note:</strong> Release notes themselves won't be
              translated in other languages.
            </>
          ) : (
            <>
              Тут ви можете прочитати про нові функції, покращення та баг фікси
              для
              <strong> Universal Source</strong>. Інакше кажучи - тут ви можете
              побачити еволюцію цього проекту. <strong>Зверніть увагу: </strong>{" "}
              самі замітки до релізів, поки що не будуть перекладені на інші
              мови.
            </>
          )}
        </Col>
      </Row>

      <Row className="release-notes align-items-center justify-content-center text-center">
        {/* body of note */}
        <Col className="note-header" xs="auto" sm="12">
          <div className="version">1.0</div>
          <span>Oct 15th 2023</span>
        </Col>
        {/* note description starts here */}
        <Row className="align-items-center justify-content-center text-center">
          <Col xs="auto">
            <div className="version type">Release</div>
          </Col>
        </Row>

        <Col
          className="note-desc"
          xs="auto"
          sm="12"
          style={{ marginTop: "0px" }}
        >
          {/* <div className="version type">Release</div> */}
          <Col xs="12" md="12" className="has-span">
            <span>App released 🎉</span>
          </Col>
        </Col>

        {isError && <ErrorToast errorMes={errorText} />}
        {isLoading && <LoadingSpinner />}
        {notes.map((note) => {
          return (
            <Row
              className="align-items-center justify-content-center text-center mt-3 note"
              key={note.id}
            >
              <Col className="note-header" xs="auto" sm="12">
                <div className="version">{note.version}</div>
                <span>{note.date}</span>
              </Col>
              <Row className="align-items-center justify-content-center text-center mt-4">
                <Col xs="auto">
                  <div className="version type">{note.type}</div>
                </Col>
              </Row>
              <Col className="note-desc" sm="12">
                <Col xs="12" md="12" className="has-span">
                  <span className="note-text">{note.note_description}</span>
                </Col>
              </Col>
            </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export default ReleaseNotesPage;
