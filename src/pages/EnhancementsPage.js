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
import { useState } from "react";
import { requestNewCategoryOrPost } from "../requests/sendRequest";
import { useTranslation } from "react-i18next";
import useResetForm from "../utils/resetForm";
import { validateForm } from "../utils/formValidation";
import { requestNewAnswers } from "../utils/translations/requestsPageTranslations";
import { TextForNavbar } from "../utils/translations/hardCodedUITranslations";
import { improvementsPage } from "../utils/translations/requestsPageTranslations";
import ErrorToast from "../subComponents/ErrorToast";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import SuccessToast from "../subComponents/successToast";

const EnhancementsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [areaToImprove, setAreaToImprove] = useState("Colors and styling");
  const [validationErrors, setValidationErrors] = useState({});

  // using custom hook to reset form after submit
  const {
    firstName,
    setFirstName,
    textMessage,
    setTextMessage,
    contactInfo,
    setContactInfo,
    resetForm,
  } = useResetForm();

  const { i18n } = useTranslation();

  // handles input and calls validateForm function
  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setFirstName(value);
        break;
      case "textMessage":
        setTextMessage(value);
        break;
      case "contactInfo":
        setContactInfo(value);
        break;
    }

    const errors = validateForm(
      { firstName, textMessage, contactInfo },
      setValidationErrors,
      i18n
    );
    setValidationErrors(errors);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      if (Object.keys(validationErrors).length > 0) {
        setIsLoading(false);
        return null;
      }

      await requestNewCategoryOrPost(
        firstName,
        textMessage,
        contactInfo,
        areaToImprove,
        "improvements"
      );
      setIsSuccess(true);

      resetForm();
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);

      setIsLoading(false);
    } catch (error) {
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
      }, 10000);

      setIsLoading(false);

      return error;
    }
  };

  // Content is returned below
  return (
    <Container fluid className="center-text">
      <Row className="align-items-center justify-content-center">
        <Col
          xs="auto"
          sm="10"
          md="9"
          lg="10"
          xl="10"
          className="app-info-2 p-3 mt-5"
        >
          <h2 className="dark-blue fortyPX">
            {TextForNavbar.navbar4[i18n.language]}
          </h2>
        </Col>
        <Col sm="10" md="9" lg="10" xl="6" className="app-info-1 p-3">
          {improvementsPage.header[i18n.language]}
        </Col>
        <Col md="8" lg="7" xl="7">
          <Form
            inline
            onSubmit={handleSubmit}
            style={{
              padding: "2rem",
              paddingBottom: "1rem",
              marginTop: "10px",
            }}
            className="form-style"
          >
            <FormGroup row>
              <Label htmlFor="name">
                {requestNewAnswers.label1[i18n.language]}
              </Label>
              <Input
                name="name"
                id="name"
                placeholder={requestNewAnswers.placeholder1[i18n.language]}
                type="text"
                className="form-control"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  handleInput(e);
                }}
                onBlur={(e) => {
                  handleInput(e);
                }}
                invalid={!!validationErrors.firstName}
              />
              {validationErrors.firstName && (
                <div className="invalid-input">
                  {validationErrors.firstName}
                </div>
              )}
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
                  handleInput(e);
                }}
                onBlur={(e) => {
                  handleInput(e);
                }}
                invalid={!!validationErrors.textMessage}
              />
              {validationErrors.textMessage && (
                <div className="invalid-input">
                  {validationErrors.textMessage}
                </div>
              )}
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="select">
                {improvementsPage.areaToImprove[i18n.language]}
              </Label>
              <Input
                name="select"
                id="select"
                type="select"
                placeholder="Select area of the site that is pertinent to your request."
                required
                value={areaToImprove}
                onChange={(e) => {
                  setAreaToImprove(e.target.value);
                }}
              >
                <option>{improvementsPage.option1[i18n.language]}</option>
                <option>{improvementsPage.option2[i18n.language]}</option>
                <option>{improvementsPage.option3[i18n.language]}</option>
                <option>{improvementsPage.option4[i18n.language]}</option>
                <option>{improvementsPage.option5[i18n.language]}</option>
                <option>{improvementsPage.option6[i18n.language]}</option>
                <option>{improvementsPage.option7[i18n.language]}</option>
              </Input>
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
                value={contactInfo}
                className="form-control"
                onChange={(e) => {
                  setContactInfo(e.target.value);
                  handleInput(e);
                }}
                onBlur={(e) => {
                  handleInput(e);
                }}
                invalid={!!validationErrors.contactInfo}
              />
              {validationErrors.contactInfo && (
                <div className="invalid-input">
                  {validationErrors.contactInfo}
                </div>
              )}
            </FormGroup>
            <Button type="submit" className="submit">
              {requestNewAnswers.sendButton[i18n.language]}
            </Button>
          </Form>
        </Col>
      </Row>
      {isError && <ErrorToast errorMes={`Request resulted in error`} />}
      {isSuccess && <SuccessToast successMes={`Your request has been sent.`} />}
      {isLoading && <LoadingSpinner />}
    </Container>
  );
};

export default EnhancementsPage;
