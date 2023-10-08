export const validateForm = (input, setValidationErrors) => {
  const errors = {};
  const checkForSpaces = /^\S/;

  if (input.firstName) {
    if (!checkForSpaces.test(input.firstName)) {
      errors.firstName = "Input can't start with spaces.";
    } else if (input.firstName.length < 2) {
      errors.firstName = "Must be at least 2 characters long.";
    } else if (input.firstName.length > 50) {
      errors.firstName = "Must not be longer than 50 characters.";
    }
  }
  if (input.textMessage) {
    if (!checkForSpaces.test(input.textMessage)) {
      errors.textMessage = "Input can't start with spaces.";
    } else if (input.textMessage.length < 25) {
      errors.textMessage = "Must be at least 25 characters long.";
    } else if (input.textMessage.length > 500) {
      errors.textMessage = "Must not be longer than 500 characters.";
    }
  }

  if (input.contactInfo) {
    if (!checkForSpaces.test(input.contactInfo)) {
      errors.contactInfo = "Input can't start with spaces.";
    } else if (input.contactInfo.length < 8) {
      errors.contactInfo = "Must be at least 8 characters long.";
    } else if (input.contactInfo.length > 70) {
      errors.contactInfo = "Must not be longer than 70 characters.";
    }
  }

  setValidationErrors(errors);

  return errors;
};
