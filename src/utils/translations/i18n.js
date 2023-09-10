import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const setResources = (questions) => {
  const translations = { uk: {}, en: {} };
  questions.forEach((question) => {
    const {
      id,
      translated_answer,
      translated_name,
      translated_category,
      answer,
      name,
      required_documents,
      translated_names_documents,
      category,
    } = question;

    translations.uk[id] = {
      key1: translated_name.uk,
      key2: translated_answer.uk,
      key3: translated_names_documents.uk,
      key4: translated_category.uk,
    };
    translations.en[id] = {
      key1: name,
      key2: answer,
      key3: required_documents,
      key4: category,
    };
  });

  i18n.addResourceBundle("uk", "translation", translations.uk, true, true);
  i18n.addResourceBundle("en", "translation", translations.en, true, true);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "translation",
    detection: {
      order: ["localStorage", "navigator"],
    },
  });

export default i18n;
