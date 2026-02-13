import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { defaultLanguage } from "@/types/i18n";

const detectionOptions = {
  order: ["localStorage", "htmlTag", "navigator"],
  caches: ["localStorage"],
  lookupLocalStorage: "stage-locker-lang",
};

const i18nInitPromise = i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage.code,
    interpolation: {
      escapeValue: false,
    },
    detection: detectionOptions,
  });

export { i18nInitPromise };

export default i18n;
