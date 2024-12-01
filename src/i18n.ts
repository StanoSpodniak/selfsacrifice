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
            MoreAboutTheProject: "Viac o projekte...",
            researcherPageTitle: "Riešiteľ",
            contactPageTitle: "Kontakt",
            findOutMore: "Popis projektu",
            aboutProjectTitle:
                "O čom je projekt Etické aspekty sebaobetovania?",
            projectAbstractTitle: "Abstrakt projektu",
            aboutProject:
                "Morálne systémy všetkých kultúr obsahujú požiadavky na obetovanie vlastného času, energie, peňazí, zdravia, a v niektorých prípadoch aj života, v prospech iných. Cieľom projektu je preskúmať etické aspekty sebaobetovania. Sebaobetovanie je analyzované v dvoch hlavných aspektoch. Prvý hlavný aspekt zahŕňa otázky povahy, morálnej správnosti, hodnoty a racionality sebaobetovania. Skúmajú sa otázky, či treba sebaobetavým činom pripisovať intrinzickú alebo inštrumentálnu hodnotu, či je každý sebaobetavý čin morálne správny a chvályhodný a v akom zmysle možno dobrovoľné vzdanie sa časti vlastného blaha v prospech iných považovať za racionálne konanie. Druhý hlavný aspekt sa zameriava na rozsah morálnych povinností obetovať sa pre iných. V tejto súvislosti sa skúma otázka zdrojov morálnych povinností konať sebaobetavo. Konkrétne sa analyzuje, či tieto povinnosti vyplývajú zo vzťahov, v ktorých sa nachádzame s inými osobami (napríklad priateľstvo alebo rodinné príbuzenstvo), alebo či zdroje morálnych povinností spočívajú v určitých univerzálnych pravidlách a princípoch.",
            projectInformationTitle: "Údaje o projekte",
            footerTitle: "EASE Projekt",
            footerContactButton: "Kontakt",
            footerNavigationTitle: "Navigácia",
            app1: "Dĺžka trvania projektu:",
            app2: "1. september 2024 –⁠⁠⁠⁠⁠⁠ 31. august 2026",
            app3: "Financovanie projektu:",
            app4: "VAIA prostredníctvom výzvy Štipendiá pre excelentných výskumníkov a výskumníčky R2-R4",
            app5: "Podrobnosti o výzve:",
            app6: "Riešiteľ:",
            rp1: "Meno riešiteľa:",
            rp2: "Mgr. Stanislav Spodniak, PhD.",
            rp3: "Pracovisko:",
            rp4: "Filozofická fakulta Univerzity Mateja Bela v Banskej Bystrici, Katedra filozofie",
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
            MoreAboutTheProject: "More about the project...",
            researcherPageTitle: "Researcher",
            contactPageTitle: "Contact",
            findOutMore: "Project Description",
            aboutProjectTitle:
                "What is the project Ethical Aspects of Self-sacrifice about?",
            projectAbstractTitle: "Project Abstract",
            aboutProject:
                "The moral systems of all cultures contain requirements to sacrifice one's own time, energy, money, health, and in some cases even life, for the benefit of others. The aim of the project is to explore the ethical aspects of self-sacrifice. Self-sacrifice is analysed in two main aspects. The first main aspect involves questions of the nature, moral rightness, value and rationality of self-sacrifice. The questions of whether intrinsic or instrumental value should be attributed to self-sacrificing acts, whether every act of self-sacrifice is morally right and praiseworthy, and in what sense the voluntary surrender of part of one's own well-being for the benefit of others can be considered a rational act are examined. The second main aspect focuses on the scope of moral obligations to sacrifice for others. In this context, the question of the sources of moral obligations to act self-sacrificially is examined. In particular, it is analysed whether these duties arise from the relationships in which we find ourselves with other persons (for example, friendship or family kinship) or whether the sources of moral duties lie in certain universal rules and principles.",
            projectInformationTitle: "Project Details",
            footerTitle: "EASE Project",
            footerContactButton: "Contact",
            footerNavigationTitle: "Navigation",
            app1: "Duration of the project:",
            app2: "1 September 2024 –⁠⁠⁠⁠⁠⁠ 31 August 2026",
            app3: "Project funding:",
            app4: "VAIA through the call Fellowships for excellent researchers R2-R4",
            app5: "Details of the call:",
            app6: "Researcher:",
            rp1: "Name of the researcher:",
            rp2: "Mgr. Stanislav Spodniak, PhD.",
            rp3: "Affiliation:",
            rp4: "Faculty of Arts, Matej Bel University in Banská Bystrica, Department of Philosophy",
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
