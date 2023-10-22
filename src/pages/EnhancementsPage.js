import ErrorToast from "../subComponents/ErrorToast";
import SuccessToast from "../subComponents/SuccessToast";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import {
  Button,
  Label,
  Col,
  Row,
  FormGroup,
  Input,
  Form,
  Container,
} from "reactstrap";
import { useEffect } from "react";
import { requestNewCategoryOrPost } from "../requests/sendRequest";

const EnhancementsPage = () => {
  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     setIsLoading(true);

  //     if (Object.keys(validationErrors).length > 0) {
  //       setIsLoading(false);
  //       return null;
  //     }

  //     await requestNewCategoryOrPost(
  //       firstName,
  //       textMessage,
  //       contactInfo,
  //       "improvements"
  //     );
  //     resetForm();
  //     setIsSuccess(true);
  //     setTimeout(() => {
  //       setIsSuccess(false);
  //     }, 10000);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsError(true);
  //     setTimeout(() => {
  //       setIsError(false);
  //     }, 10000);
  //     setIsLoading(false);

  //     return error;
  //   }
  // };

  return <div>test</div>;
  // <Container fluid className="center-text">
  //   {
  //     <Row className="justify-content-center add-margin-top">
  //       <Col xs="auto" lg="auto" xl="8" className="add-margin-top">
  //         <h2 className="app-info-2 mb-0 mt-5 py-3 dark-blue ">test</h2>
  //         <p className="app-info-1 p-2 ">test</p>
  //       </Col>
  //       {/* Second column that holds the form */}
  //       <Col md="8" lg="7" xl="6">
  //         {/* Actual form starts below */}
  //         <Form
  //           inline
  //           onSubmit={handleSubmit}
  //           style={{
  //             padding: "2rem",
  //             paddingBottom: "1rem",
  //             marginBottom: "0.5rem",
  //           }}
  //           className="form-style"
  //         >
  //           <FormGroup row>
  //             <Label htmlFor="name">
  //               {requestNewAnswers.label1[i18n.language]}
  //             </Label>
  //             <Input
  //               placeholder={requestNewAnswers.placeholder1[i18n.language]}
  //               name="name"
  //               id="name"
  //               type="text"
  //               className="form-control"
  //               required
  //               value={firstName}
  //               onChange={(e) => {
  //                 setFirstName(e.target.value);
  //                 handleInput(e);
  //               }}
  //               onBlur={(e) => {
  //                 handleInput(e);
  //               }}
  //               invalid={!!validationErrors.firstName}
  //             />
  //             {validationErrors.firstName && (
  //               <div className="invalid-input">
  //                 {validationErrors.firstName}
  //               </div>
  //             )}
  //           </FormGroup>
  //           <FormGroup row>
  //             <Label htmlFor="textMessage">
  //               {requestNewAnswers.label2[i18n.language]}
  //             </Label>
  //             <Input
  //               name="textMessage"
  //               id="textMessage"
  //               placeholder={requestNewAnswers.placeholder2[i18n.language]}
  //               type="textarea"
  //               required
  //               value={textMessage}
  //               onChange={(e) => {
  //                 setTextMessage(e.target.value);
  //                 handleInput(e);
  //               }}
  //               onBlur={(e) => {
  //                 handleInput(e);
  //               }}
  //               invalid={!!validationErrors.textMessage}
  //             />
  //             {validationErrors.textMessage && (
  //               <div className="invalid-input">
  //                 {validationErrors.textMessage}
  //               </div>
  //             )}
  //           </FormGroup>
  //           <FormGroup row>
  //             <Label htmlFor="contactInfo">
  //               {requestNewAnswers.label3[i18n.language]}
  //             </Label>
  //             <Input
  //               placeholder={requestNewAnswers.placeholder3[i18n.language]}
  //               name="contactInfo"
  //               id="contactInfo"
  //               required
  //               value={contactInfo}
  //               className="form-control"
  //               onChange={(e) => {
  //                 setContactInfo(e.target.value);
  //                 handleInput(e);
  //               }}
  //               onBlur={(e) => {
  //                 handleInput(e);
  //               }}
  //               invalid={!!validationErrors.contactInfo}
  //             />
  //             {validationErrors.contactInfo && (
  //               <div className="invalid-input">
  //                 {validationErrors.contactInfo}
  //               </div>
  //             )}
  //           </FormGroup>
  //           <Button
  //             type="submit"
  //             style={{
  //               backgroundColor: "#021740",
  //               color: "#fff",
  //               paddingLeft: "1.5rem",
  //               paddingRight: "1.5rem",
  //               marginTop: "0.75rem",
  //             }}
  //           ></Button>
  //         </Form>
  //       </Col>
  //     </Row>
  //   }
  // </Container>
  // );
  // };
};

export default EnhancementsPage;
