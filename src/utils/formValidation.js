import { requestNewAnswers } from "./translations/requestsPageTranslations";

export const validateForm = (input, setValidationErrors, i18n) => {
  const errors = {};
  const checkForSpaces = /^\S/;

  if (input.firstName) {
    if (!checkForSpaces.test(input.firstName)) {
      errors.firstName = `${requestNewAnswers.spaceError[i18n.language]}`;
    } else if (input.firstName.length < 2) {
      errors.firstName = `${requestNewAnswers.fNameMinLength[i18n.language]}`;
    } else if (input.firstName.length > 50) {
      errors.firstName = `${requestNewAnswers.fNameMaxLength[i18n.language]}`;
    }
  }
  if (input.textMessage) {
    if (!checkForSpaces.test(input.textMessage)) {
      errors.textMessage = `${requestNewAnswers.spaceError[i18n.language]}`;
    } else if (input.textMessage.length < 25) {
      errors.textMessage = `${
        requestNewAnswers.textMesMinLength[i18n.language]
      }`;
    } else if (input.textMessage.length > 500) {
      errors.textMessage = `${
        requestNewAnswers.textMesMaxLength[i18n.language]
      }`;
    }
  }

  if (input.contactInfo) {
    if (!checkForSpaces.test(input.contactInfo)) {
      errors.contactInfo = `${requestNewAnswers.spaceError[i18n.language]}`;
    } else if (input.contactInfo.length < 8) {
      errors.contactInfo = `${
        requestNewAnswers.contInfoMinLength[i18n.language]
      }`;
    } else if (input.contactInfo.length > 70) {
      errors.contactInfo = `${
        requestNewAnswers.contInfoMaxLength[i18n.language]
      }`;
    }
  }

  setValidationErrors(errors);

  return errors;
};
