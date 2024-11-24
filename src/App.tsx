import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import AboutProject from "./components/aboutProject/AboutProject";
import { useTranslation } from "react-i18next";
import Footer from "./components/footer/Footer";

function App() {
    //Pridať odkaz na: https://ispo.planobnovy.sk/app/vyzvy/455104889489371136
    //Pod abstrakt doplniť button viac o projekte, ktorý bude odkazovať na stránku o projekte
    const { t } = useTranslation();

    const [quotes] = useState([
        {
            text: "The greatest virtues are those which are most useful to other persons.",
            author: "Aristotle",
        },
        {
            text: "One’s life has value so long as one attributes value to the life of others, by means of love, friendship, and compassion.",
            author: "Simone de Beauvoir",
        },
        {
            text: "The purpose of human life is to serve and to show compassion and the will to help others.",
            author: "Albert Schweitzer",
        },
    ]);
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    useEffect(() => {
        const getRandomQuote = () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setCurrentQuote(quotes[randomIndex]);
        };

        getRandomQuote();

        const intervalId = setInterval(getRandomQuote, 30000);

        return () => clearInterval(intervalId);
    }, [quotes]);

    const changeLinkColor = () => {
        sessionStorage.setItem("activeLink", "about");
    };

    return (
        <>
            <Header />
            <div className="homePageBanner">
                <img src="./Good_Samaritan.jpg" alt="good samaritan" />
                <div className="qouteBanner">
                    <blockquote>"{currentQuote.text}"</blockquote>
                    <cite>({currentQuote.author})</cite>
                    <a
                        href={
                            localStorage.getItem("i18nextLng") === "en"
                                ? "/about-project"
                                : "/o-projekte"
                        }
                    >
                        <button
                            className="aboutProjectButton"
                            onClick={changeLinkColor}
                        >
                            {t("findOutMore")}
                        </button>
                    </a>
                </div>
            </div>
            <AboutProject />
            <Footer />
        </>
    );
}

export default App;
