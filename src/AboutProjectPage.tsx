import style from "./AboutProjectPage.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutProject from "./components/aboutProject/AboutProject";
import { useTranslation } from "react-i18next";

const AboutProjectPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className={style.titleContainer}>
                <h2 className={style.title}>{t("aboutPageTitle")}</h2>
            </div>
            <h3 className={style.subtitle}>{t("projectAbstractTitle")}</h3>
            <AboutProject />
            <h3 className={style.subtitle}>{t("projectInformationTitle")}</h3>
            <div className={style.projectDetails}>
                <div className={style.line}>
                    <p>
                        <strong>{t("app6")}</strong>
                    </p>
                    <p>Mgr. Stanislav Spodniak, PhD.</p>
                </div>
                <div className={style.line}>
                    <p>
                        <strong>{t("app1")}</strong>
                    </p>
                    <p>{t("app2")}</p>
                </div>
                <div className={style.line}>
                    <p>
                        <strong>{t("app3")}</strong>
                    </p>
                    <p>{t("app4")}</p>
                </div>
                <div className={style.line}>
                    <p>
                        <strong>{t("app5")}</strong>
                    </p>
                    <a
                        href="https://vaia.gov.sk/sk/2023/06/27/stipendia-pre-excelentnych-vyskumnikov-a-vyskumnicky-r2-r4/"
                        target="_blank"
                    >
                        VAIA.gov.sk
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutProjectPage;
