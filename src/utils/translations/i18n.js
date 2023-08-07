import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
window.i18n = i18n;

export const setResources = (questions) => {
  const translations = { uk: {}, en: {} };
  console.log(translations);
  questions.forEach((question) => {
    const {
      id,
      translated_answer,
      translated_name,
      translated_category,
      answer,
      name,
      required_documents,
      category,
    } = question;
    console.log(translated_answer.uk, answer);
    translations.uk = {
      key1: translated_answer.uk,
    };
    translations.en = {
      key1: answer,
    };
  });

  i18n.addResourceBundle("uk", "translation", translations.uk, true, true);
  i18n.addResourceBundle("en", "translation", translations.en, true, true);
  console.log("function execution is complete");
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
    resources: {
      en: {},
      uk: {},
    },
    defaultNS: "translation",
  });

export default i18n;
