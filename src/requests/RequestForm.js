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
import ErrorToast from "../subComponents/ErrorToast";
import SuccessToast from "../subComponents/SuccessToast";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import { useEffect, useState } from "react";
import { requestNewCategoryOrPost } from "./sendRequest";
import { requestNewAnswers } from "../utils/translations/requestsPageTranslations";
import { useTranslation } from "react-i18next";

const RequestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const resetForm = () => {
    setFirstName("");
    setTextMessage("");
    setContactInfo("");
  };

  const { i18n } = useTranslation();

  useEffect(() => {
    if (isSuccess || isError) {
      setIsLoading(false);
    }
  }, [isSuccess, isError]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await requestNewCategoryOrPost(firstName, textMessage, contactInfo);
      resetForm();
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      return error;
    }
  };

  //  expand  the text by full width, not the form, all the headers are fixel, , everything else is default, headers need to be dark blue
  return (
    <Container fluid>
      {isError && <ErrorToast errorMes={`Request resulted in error`} />}
      {isSuccess && <SuccessToast successMes={`Your request has been sent.`} />}
      {
        <Row className="justify-content-center">
          <Col md="7" lg="6" xl="6" xs="10" sm="9">
            <Col md="12">
              <h2 className="app-info-2 mb-0 py-3">
                {requestNewAnswers.header[i18n.language]}
              </h2>
              <Row className="mt-0 mb-4">
                <Col>
                  <p className="app-info-1 p-2">
                    {requestNewAnswers.$1stPart[i18n.language]}
                  </p>
                </Col>
              </Row>
            </Col>
            <div className="form-style">
              {/* Actual form starts below */}
              <Form inline onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="name">
                    {requestNewAnswers.label1[i18n.language]}
                  </Label>
                  <Input
                    placeholder={requestNewAnswers.placeholder1[i18n.language]}
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
                  <Label htmlFor="textMessage">
                    {requestNewAnswers.label2[i18n.language]}
                  </Label>
                  <Input
                    name="textMessage"
                    id="textMessage"
                    placeholder={requestNewAnswers.placeholder2[i18n.language]}
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
                    {requestNewAnswers.label3[i18n.language]}
                  </Label>
                  <Input
                    placeholder={requestNewAnswers.placeholder3[i18n.language]}
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
                    backgroundColor: "#d6d4d0",
                    color: "#000",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    marginTop: "0.75rem",
                  }}
                >
                  {requestNewAnswers.sendButton[i18n.language]}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      }
      {isLoading && <LoadingSpinner />}
    </Container>
  );
};

export default RequestForm;
