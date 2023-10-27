import { Col, Row, Container, Badge } from "reactstrap";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import LoadingSpinner from "../subComponents/LoadingSpinner";

const ReleaseNotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    setLoading(true);
    try {
      const response = await getDocs(collection(db, "notes"));
      const notesArr = [];
      response.forEach((doc) => {
        notesArr.push(doc.data());
      });
      setLoading(false);
      setNotes(notesArr);
    } catch (error) {
      throw error;
    }
  }

  return (
    <Container fluid className="add-margin-top">
      <Row className="align-items-center justify-content-center text-center">
        <Col sm="10" md="9" lg="10" xl="auto" className="app-info-2 p-3 mt-5">
          <h2 className="dark-blue">Release Notes</h2>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col sm="10" md="9" lg="10" xl="9" className="app-info-1 p-3 mb-5">
          Here you can suggest about new features, improvements (bug fixes) for{" "}
          {<strong>Universal Source</strong>}. Said differently - here you can
          see the evolution of this project.
        </Col>
      </Row>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="release-notes">
          {/* body of note */}
          <div className="note">
            <Badge color="dark">1.0</Badge>
            <span>October 15th 2023</span>
            {/* note description starts here */}
            <div className="note-desc">
              <Badge color="dark">Release</Badge>
              <span>App released 🎉</span>
            </div>
          </div>

          {notes.map((note) => {
            return (
              <div className="note" key={note.id}>
                <div className="note-header">
                  <Badge color="dark" className="version">
                    {note.version}
                  </Badge>
                  <span>{note.date}</span>
                </div>
                <div className="note-desc">
                  <div className="type-badge">{note.type[0]}</div>
                  <span className="note-text">{note.note_description}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default ReleaseNotesPage;
