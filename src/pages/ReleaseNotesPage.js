// import { Col, Row, Container } from "reactstrap";
// import { useEffect, useState } from "react";
// import { db } from "../utils/firebase.config";
// import { collection, getDocs, orderBy, where, query } from "firebase/firestore";
// import LoadingSpinner from "../subComponents/LoadingSpinner";

// const ReleaseNotesPage = () => {
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getNotes();
//   }, []);

//   async function getNotes() {
//     setLoading(true);
//     try {
//       const response = await getDocs(collection(db, "notes"));
//       const notesArr = [];
//       response.forEach((doc) => {
//         notesArr.push(doc.data());
//       });
//       setLoading(false);
//       setNotes(notesArr);
//     } catch (error) {
//       throw error;
//     }
//   }

//   return (
//     <Container fluid className="add-margin-top">
//       <Row className="align-items-center justify-content-center text-center">
//         <Col sm="10" md="9" lg="10" xl="auto" className="app-info-2 p-3 mt-5">
//           <h2 className="dark-blue">Release Notes</h2>
//         </Col>
//       </Row>
//       <Row className="justify-content-center text-center">
//         <Col sm="8" md="7" lg="6" xl="5" className="app-info-1 p-3 mb-5">
//           Here you can suggest about new features, improvements (bug fixes) for{" "}
//           {<strong>Universal Source</strong>}. Said differently - here you can
//           see the evolution of this project.
//         </Col>
//       </Row>
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <Row className="release-notes align-items-center justify-content-center text-center">
//           {/* body of note */}
//           <Col className="note align-items-center justify-content-center text-center">
//             <Col className="note-header">
//               <div className="version">1.0</div>
//               <span>October 15th 2023</span>
//             </Col>
//             {/* note description starts here */}
//             <Col className="note-desc">
//               <div className="version type">Release</div>
//               <span>App released 🎉</span>
//             </Col>
//           </Col>

//           {notes.map((note) => {
//             return (
//               <Row
//                 className="note align-items-center justify-content-center text-center mt-3"
//                 key={note.id}
//               >
//                 <Col className="note-header" xs="auto" sm="12">
//                   <div className="version">{note.version}</div>
//                   <span>{note.date}</span>
//                 </Col>
//                 <Col className="note-desc" xs="auto" sm="12">
//                   <Row className="justify-content-center">
//                     <Col xs="auto" md="auto">
//                       <div className="version type">{note.type}</div>
//                     </Col>
//                     <Col xs="auto" md="auto" className="has-span">
//                       <span className="note-text">{note.note_description}</span>
//                     </Col>
//                   </Row>
//                 </Col>
//               </Row>
//             );
//           })}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default ReleaseNotesPage;
