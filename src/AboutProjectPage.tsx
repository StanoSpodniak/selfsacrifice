import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useTranslation } from "react-i18next";

const AboutProjectPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <h2>{t("aboutPageTitle")}</h2>
            <Footer />
        </>
    );
};

export default AboutProjectPage;
