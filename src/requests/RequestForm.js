import { Button, Label, Col, Row, FormGroup, Input, Form } from "reactstrap";
import ErrorToast from "../subComponents/ErrorToast";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import { useState } from "react";
import { requestNewCategoryOrPost } from "./sendRequest";
const RequestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [promiseState, setPromiseState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setFirstName("");
    setTextMessage("");
    setContactInfo("");
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const resolvedProm = await requestNewCategoryOrPost(
        firstName,
        textMessage,
        contactInfo
      );
      resetForm();
      setIsLoading(false);
      setPromiseState("success");
      return resolvedProm;
    } catch (error) {
      setIsLoading(false);
      setPromiseState("error");
      return error;
    }
  };

  return (
    <div>
      {promiseState === "error" && (
        <ErrorToast errorMes={`Request resulted in:` + promiseState} />
      )}
      {promiseState === "success" && <p>success test</p>}
      {!isLoading && (
        <Row className="justify-content-center">
          <Col md="7" lg="6" xl="6" xs="10" sm="9">
            <h2 className="app-info-2 mb-0 py-3">
              Request new answers or contact developer
            </h2>
            <Row className="mt-0 mb-4">
              <Col>
                <p className="app-info-1 p-2">
                  Here you can send a request to the developer to include new
                  post and/or category. For example: there is something you
                  think would be helpfull for others to be on this website
                  available in different languages. The form below will allow
                  you to articulate your thouhgts. For example: you believe this
                  app should have info on to apply for Unemployment.
                </p>
              </Col>
            </Row>
            <div className="form-style">
              {/* Actual form starts below */}
              <Form inline onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    placeholder="Enter your name..."
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    required
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="textMessage">Text Message</Label>
                  <Input
                    name="textMessage"
                    id="textMessage"
                    placeholder="Enter your message..."
                    type="textarea"
                    required
                    value={textMessage}
                    onChange={(e) => {
                      setTextMessage(e.target.value);
                    }}
                  />
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="contactInfo">
                    Contact Info(phone or email)
                  </Label>
                  <Input
                    placeholder="Enter your contact info..."
                    name="contactInfo"
                    id="contactInfo"
                    required
                    className="form-control"
                    value={contactInfo}
                    onChange={(e) => {
                      setContactInfo(e.target.value);
                    }}
                  />
                </FormGroup>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#4263eb",
                    color: "#fff",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    marginTop: "0.75rem",
                  }}
                >
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default RequestForm;
