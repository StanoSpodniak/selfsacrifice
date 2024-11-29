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
            findOutMore: "Popis projektu",
            aboutProjectTitle:
                "O čom je projekt Etické aspekty sebaobetovania?",
            aboutProject:
                "Morálne systémy všetkých kultúr obsahujú požiadavky obetovať vlastný čas, energiu, peniaze, zdravie, ak nie život, v prospech niekoho iného. Cieľom projektu je preskúmať etické aspekty sebaobetovania. Sebaobetovanie je analyzované v dvoch hlavných aspektoch. Prvý hlavný aspekt vyjadrujú otázky povahy, morálnej správnosti, hodnoty a racionality sebaobetovania, t. j. otázky, či treba sebaobetavým činom pripisovať intrinzickú alebo inštrumentálnu hodnotu, či je každý sebaobetavý čin morálne správny a chvályhodný a v akom zmysle možno dobrovoľné vzdanie sa časti vlastného blaha v prospech niekoho iného považovať za prípad racionálneho konania. V rámci druhého aspektu sa skúma rozsah morálnych povinností obetovať sa pre iných, teda je skúmané pre koho a do akej miery sme morálne povinní sa obetovať. S týmto cieľom sa skúma otázka zdrojov morálnych povinností konať obetavo, konkrétne je skúmané, či sú zdrojmi morálnych povinností vzťahy, v ktorých sa nachádzame s inými osobami (napr. priateľstvo, rodinné príbuzenstvo), alebo či zdroje morálnych povinností spočívajú v určitých pravidlách a princípoch.",
            footerTitle: "EASE Projekt",
            footerContactButton: "Kontakt",
            footerNavigationTitle: "Navigácia",
        },
    },
    en: {
        translation: {
            mainTitle: "Ethical aspects of self-sacrifice",
            navAboutProject: "About project",
            navResearcher: "Researcher",
            navContact: "Contact",
            homePageTitle: "Home page",
            aboutPageTitle: "About project",
            researcherPageTitle: "Researcher",
            contactPageTitle: "Contact",
            findOutMore: "Project Description",
            aboutProjectTitle:
                "What is the project Ethical Aspects of Self-sacrifice about?",
            aboutProject:
                "The moral systems of all cultures contain requirements to sacrifice one's own time, energy, money, health, if not life, for the benefit of someone else. The aim of the project is to explore the ethical aspects of self-sacrifice. Self-sacrifice is analysed in two main aspects. The first main aspect is expressed by the questions of the nature, moral rightness, value and rationality of self-sacrifice, i.e. the questions of whether intrinsic or instrumental value should be attributed to self-sacrificial acts, whether every self-sacrificial act is morally right and praiseworthy, and in what sense the voluntary surrender of a part of one's own well-being for the sake of someone else can be considered as a case of a rational act. The second aspect examines the extent of moral obligations to sacrifice for others, that is, it examines for whom and to what extent we are morally obliged to sacrifice. To this end, the question of the sources of moral obligations to act self-sacrificially is examined; specifically, it is examined whether the sources of moral obligations are the relationships in which we find ourselves with other persons (e.g., friendship, family kinship), or whether the sources of moral obligations lie in certain rules and principles.",
            footerTitle: "EASE Project",
            footerContactButton: "Contact",
            footerNavigationTitle: "Navigation",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: sessionStorage.getItem("i18nextLng") || "sk", // Default language
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
