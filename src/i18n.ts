import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    sk: {
      translation: {
        mainTitle: "Etické aspekty sebaobetovania",
        aboutProject: "Projekt je o etických aspektoch sebaobetovania",
        navAboutProject: "O projekte",
        navResearcher: "Riešiteľ",
        navContact: "Kontakt",
      },
    },
    en: {
      translation: {
        mainTitle: "Ethical aspects of selfsacrifice",
        aboutProject: "Project is about ethical aspects of selfsacrifice",
        navAboutProject: "About project",
        navResearcher: "Researcher",
        navContact: "Contact",
      },
    },
  },
  lng: "sk", // default language
  fallbackLng: "sk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
