import { useTranslation } from "react-i18next";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const ResearcherPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <h2>{t("researcherPageTitle")}</h2>
            <Footer />
        </>
    );
};

export default ResearcherPage;
