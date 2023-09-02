import { Button, Label, Col, Row, FormGroup, Input, Form } from "reactstrap";

import { useState } from "react";
import { requestNewCategoryOrPost } from "./requestsSlice";

const RequestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const resetForm = () => {
    setFirstName("");
    setTextMessage("");
    setContactInfo("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestNewCategoryOrPost(firstName, textMessage, contactInfo);
    resetForm();
  };

  return (
    <Row className="justify-content-center">
      <Col md="7" lg="6" xl="5" xs="10" sm="9">
        <h2 className="app-info-2 mb-0">
          Request new answers or contact developer
        </h2>
        <Row className="mb-4">
          <Col>
            <p className="app-info-1">
              Here you can send a request to the developer to include new post
              and/or category. For example: there is something you think would
              be helpfull for others to be on this website available in
              different languages. The form below will allow you to articulate
              your thouhgts. For example: you believe this app should have info
              on to apply for Unemployment.
            </p>
          </Col>
        </Row>
        <div>
          {/* Actual form starts below */}
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstName">Your Name</Label>
              <Input
                placeholder="Enter your name"
                name="firstName"
                className="form-control"
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
                placeholder="Enter your message here..."
                type="textarea"
                value={textMessage}
                onChange={(e) => {
                  setTextMessage(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="contactInfo">Contact Info(phone or email)</Label>
              <Input
                placeholder="Enter your contact info here..."
                name="contactInfo"
                className="form-control"
                value={contactInfo}
                onChange={(e) => {
                  setContactInfo(e.target.value);
                }}
              />
            </FormGroup>
            <Button type="submit" color="info">
              Send
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RequestForm;
