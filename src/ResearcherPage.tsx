import style from "./ResearcherPage.module.css";
import { useTranslation } from "react-i18next";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//Orcid, pracovisko

const ResearcherPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className={style.titleContainer}>
                <h2 className={style.title}>{t("researcherPageTitle")}</h2>
            </div>
            <div className={style.projectDetails}>
                <div className={style.line}>
                    <p>
                        <strong>{t("rp1")}</strong>
                    </p>
                    <p>{t("rp2")}</p>
                </div>
                <div className={style.line}>
                    <p>
                        <strong>{t("rp3")}</strong>
                    </p>
                    <p>{t("rp4")}</p>
                </div>
                <div className={style.line}>
                    <p>
                        <strong>ORCID:</strong>
                    </p>
                    <a
                        href="https://orcid.org/0000-0001-8621-1842"
                        target="_blank"
                    >
                        0000-0001-8621-1842
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ResearcherPage;
