import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const setResources = (questions) => {
  const translations = {};
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
    translations.uk[id] = {
      translation: {
        key1: translated_answer.uk,
      },
    };
    translations.en[id] = {
      translation: {
        key1: answer,
      },
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
    resources: {
      en: {},
      uk: {},
    },
    defaultNS: "translation",
  });

export default i18n;
