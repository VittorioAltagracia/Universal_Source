import { Button, Label, Col, FormGroup, Input } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { requestNewCategoryOrPost } from "./requestsSlice";

const RequestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          textMessage: "",
          contactInfo: "",
        }}
        onSubmit={(values) => {
          requestNewCategoryOrPost(
            values.firstName,
            values.textMessage,
            values.contactInfo
          );
        }}
      >
        {(formikProps) => (
          <Form>
            <FormGroup row>
              <Label htmlFor="firstName">Your Name</Label>
              <Col md="6">
                <Field
                  placeholder="Enter your name"
                  name="firstName"
                  className="form-control"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="textMessage">Text Message</Label>
              <Col md="6">
                <Input id="textMessage" name="textMessage" type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="contactInfo">Contact Info(phone or email)</Label>
              <Col md="6">
                <Field
                  placeholder="Enter your contact info here..."
                  name="contactInfo"
                  className="form-control"
                />
              </Col>
            </FormGroup>
            <Button type="submit" color="info">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RequestForm;
