import { useTranslation } from "react-i18next";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <h2>{t("contactPageTitle")}</h2>
            <Footer />
        </>
    );
};

export default ContactPage;
