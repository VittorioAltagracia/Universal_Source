import { useState } from "react";

// Created custom reusable hook
function useResetForm() {
  const [firstName, setFirstName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const resetForm = () => {
    setFirstName("");
    setTextMessage("");
    setContactInfo("");
  };

  return {
    firstName,
    setFirstName,
    textMessage,
    setTextMessage,
    contactInfo,
    setContactInfo,
    resetForm,
  };
}

export default useResetForm;
