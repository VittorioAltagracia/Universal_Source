export const validateForm = (input) => {
  console.log("....Validating....");
  const errors = {};

  const checkForSpaces = /^\S/;

  if (!checkForSpaces.test(input.firstName)) {
    errors.firstName = "Input can start with spaces.";
  } else if (input.firstName.length < 2) {
    errors.firstName = "Must be at least 2 characters long.";
  } else if (input.firstName.length > 50) {
    errors.firstName = "Must not be longer than 50 characters.";
  }

  if (!checkForSpaces.test(input.textMessage)) {
    errors.textMessage = "Input can start with spaces.";
  } else if (input.textMessage.length < 25) {
    errors.textMessage = "Must be at least 25 characters long.";
  } else if (input.textMessage.length > 500) {
    errors.textMessage = "Must not be longer than 500 characters.";
  }

  if (!checkForSpaces.test(input.contactInfo)) {
    errors.contactInfo = "Input can start with spaces.";
  } else if (input.contactInfo.length < 8) {
    errors.contactInfo = "Must be at least 8 characters.";
  } else if (input.contactInfo.length > 70) {
    errors.contactInfo = "Must not be longer than 70 characters.";
  }

  return Object.keys(errors).length === 0;
};
