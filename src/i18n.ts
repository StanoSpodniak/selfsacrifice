import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  sk: {
    translation: {
      mainTitle: "Etické aspekty sebaobetovania",
      navAboutProject: "O projekte",
      navResearcher: "Riešiteľ",
      navContact: "Kontakt",
      homePageTitle: "Domov",
      aboutPageTitle: "O projekte",
      researcherPageTitle: "Riešiteľ",
      contactPageTitle: "Kontakt",
      aboutProject:
        "Abstrakt projektu: Projekt je o etických aspektoch sebaobetovania",
    },
  },
  en: {
    translation: {
      mainTitle: "Ethical aspects of selfsacrifice",
      navAboutProject: "About project",
      navResearcher: "Researcher",
      navContact: "Contact",
      homePageTitle: "Home page",
      aboutPageTitle: "About project",
      researcherPageTitle: "Researcher",
      contactPageTitle: "Contact",
      aboutProject:
        "Project abstract: Project is about ethical aspects of selfsacrifice",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "sk", // Default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
